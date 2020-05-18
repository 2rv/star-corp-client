import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { sizes, colors } from '../theme';
import { Link as LinkComponent, Text } from '.';

export const MovingLineLinks = ({ Link = LinkComponent, links }) => {
  const router = useRouter();

  useEffect(() => {
    Router.events.on('routeChangeError', () => findAndSetActiveLink());
  }, []);

  const [activeLink, setActiveLink] = useState(null);
  const [lineSettings, setLineSettings] = useState({
    width: 0,
    offset: 0,
  });

  const linksRefs = links.map(() => useRef());
  useEffect(() => {
    if (!activeLink) {
      return setLineSettings({
        offset: lineSettings.offset,
        width: 0,
      });
    }
    setLineSettings({
      offset: activeLink.offsetLeft + 7,
      width: activeLink.clientWidth - 7 * 2, // minus padding
    });
  }, [activeLink]);

  useEffect(() => {
    findAndSetActiveLink();
  }, [router.route]);

  const findAndSetActiveLink = () => {
    const activeDataLink = links.find(({ href }) => href === router.route);
    const activeRefLink = linksRefs[links.indexOf(activeDataLink)]
      ? linksRefs[links.indexOf(activeDataLink)].current
      : null;
    setActiveLink(activeRefLink);
  };

  const handleClickLink = (index) => {
    const activeDataLink = links[index];
    const activeRefLink = linksRefs[links.indexOf(activeDataLink)].current;
    setActiveLink(activeRefLink);
  };

  const handlePointerEnterLink = (index) => {
    const { current: ref } = linksRefs[index];
    setLineSettings({
      offset: ref.offsetLeft + 7,
      width: ref.clientWidth - 7 * 2, // minus padding
    });
  };

  const handlePointerLeaveLink = () => {
    setLineSettings({
      offset: activeLink ? activeLink.offsetLeft + 7 : lineSettings.offset,
      width: activeLink ? activeLink.clientWidth - 7 * 2 : 0,
    });
  };

  return (
    <Container>
      <Line lineSettings={lineSettings} />
      {links.map(({ tid, href }, index) => (
        <LinkWrapper
          ref={linksRefs[index]}
          onPointerEnter={() => handlePointerEnterLink(index)}
          onPointerLeave={() => handlePointerLeaveLink()}
          key={href}
          onClick={() => handleClickLink(index)}
        >
          <Link isActive={activeLink === linksRefs[index].current ? 1 : 0} href={href}>
            <Text tid={tid} />
          </Link>
        </LinkWrapper>
      ))}
    </Container>
  );
};

MovingLineLinks.propTypes = {
  Link: PropTypes.func,
  links: PropTypes.array.isRequired,
};

const Container = styled.nav`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Line = styled.div`
  position: absolute;
  left: ${({ lineSettings: { offset } }) => offset}px;
  width: ${({ lineSettings: { width } }) => width}px;
  height: 2px;
  background-color: ${colors.primary};
  top: 50%;
  transform: translateY(calc(-50% + 15px));
  transition: ${sizes.transition.default};
`;
const LinkWrapper = styled.div`
  height: 100%;
`;
