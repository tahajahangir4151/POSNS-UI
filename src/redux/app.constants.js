import { asyncActionType } from '../utils/reduxActions';

export const FILTER_ACTIONS = {
  SET_USER: 'SET_USER',
  LOG_OUT: 'LOG_OUT',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_COMPLETE: 'SIGN_UP_COMPLETE',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
  SET_SIGNUP_ERROR: 'SET_SIGNUP_ERROR',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_MAIN_CATEGORIES: asyncActionType('[POSNS]GET_MAIN_CATEGORIES'),
  GET_MAIN_CATEGORIES_BEGIN: '[POSNS]GET_MAIN_CATEGORIES_BEGIN',

  GET_TABLES: asyncActionType('[POSNS]GET_TABLES'),
  GET_TABLES_BEGIN: '[POSNS]GET_TABLES_BEGIN',

  GET_WAITERS: asyncActionType('[POSNS]GET_WAITERS'),
  GET_WAITERS_BEGIN: '[POSNS]GET_WAITERS_BEGIN',

  GET_SALES_PERSON: asyncActionType('[POSNS]GET_SALES_PERSON'),
  GET_SALES_PERSON_BEGIN: '[POSNS]GET_SALES_PERSON_BEGIN',

  GET_ORDER_BY_WAITER_ID: asyncActionType('[POSNS]GET_ORDER_BY_WAITER_ID'),
  GET_ORDER_BY_WAITER_ID_BEGIN: '[POSNS]GET_ORDER_BY_WAITER_ID_BEGIN',

  GET_ORDER_DETAILS: asyncActionType('[POSNS]GET_ORDER_DETAILS'),
  GET_ORDER_DETAILS_BEGIN: '[POSNS]GET_ORDER_DETAILS_BEGIN',

  GET_SUBCATEGORIES_BY_ID: asyncActionType('[POSNS]GET_SUBCATEGORIES_BY_ID'),
  GET_SUBCATEGORIES_BY_ID_BEGIN: '[POSNS]GET_SUBCATEGORIES_BY_ID_BEGIN',

  SAVE_ORDER_BEGIN: '[POSNS]SAVE_ORDER_BEGIN',
  SAVE_ORDER: asyncActionType('[POSNS]SAVE_ORDER'),

  UPDATE_ORDER_BEGIN: '[POSNS]UPDATE_ORDER_BEGIN',
  UPDATE_ORDER: asyncActionType('[POSNS]UPDATE_ORDER'),

  SET_SELECTED_CATEGORY_ID: '[POSNS]SET_SELECTED_CATEGORY_ID',

  SET_SELECTED_SUB_CATEGORY_ITEM: '[POSNS]SET_SELECTED_SUB_CATEGORY_ITEM',
  SET_ITEM_QUANTITY: '[POSNS]SET_ITEM_QUANTITY',

  SET_REMARKS: '[POSNS]SET_REMARKS',
  SET_SELECTED_WAITER: '[POSNS]SET_SELECTED_WAITER',
  SET_SELECTED_TABLE: '[POSNS]SET_SELECTED_TABLE',
  DELETE_SELECTED_ITEM: '[POSNS]DELETE_SELECTED_ITEM',
  RESET_NOTIFICATION: '[POSNS]RESET_NOTIFICATION',
  RESET_ORDER_NO: '[POSNS]RESET_ORDER_NO',
  SET_EDIT_MODE: '[POSNS]SET_EDIT_MODE',
  RESET_STATE: '[POSNS]RESET_STATE',
  SET_NO_OF_GUESTS: '[POSNS]SET_NO_OF_GUESTS',
  SET_REFRESH_DATA:'[POSNS]SET_REFRESH_DATA',
  RESET_ERROR_STATE:'[POSNS]RESET_ERROR_STATE'
};

export default {
  ...FILTER_ACTIONS,
};
