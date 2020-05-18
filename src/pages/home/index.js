import React, { Component } from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { PageLayout, ContentLayout } from '../../components/layouts';

class HomePage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.HOME));
    return {};
  }

  render() {
    return (
      <PageLayout>
        <Head id={PAGE_TYPE.HOME} />
        <ContentLayout>Home page</ContentLayout>
      </PageLayout>
    );
  }
}

export default HomePage;
