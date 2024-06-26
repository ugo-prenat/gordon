import {
  CALENDAR_VIEWS,
  WEEK_CALENDAR_VIEW,
  WEEKEND_CALENDAR_VIEW
} from 'src/constants';

export type CalendarView = (typeof CALENDAR_VIEWS)[number];

export type DayView = typeof WEEK_CALENDAR_VIEW | typeof WEEKEND_CALENDAR_VIEW;

export const CALENDAR_STORAGE_KEY = 'calendar';

export interface IDateRange {
  from: Date;
  to: Date;
}
