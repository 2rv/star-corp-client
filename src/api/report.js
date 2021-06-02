import { REPORT } from '../constants/fields';

export const convertReportData = (data) => ({
  [REPORT.NICKNAME]: data.nickname,
  [REPORT.DESCRIPTION]: data.description,
});
