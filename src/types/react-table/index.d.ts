import {
  ComponentType,
  CSSProperties,
  MouseEvent,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactText,
} from "react";

declare module "react-table" {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration
  export interface TableOptions<D>  // UseExpandedOptions<D>,
    extends // UseFiltersOptions<D>,
      // UseGlobalFiltersOptions<D>,
      // UseGroupByOptions<D>,
      UsePaginationOptions<D>,
      // UseResizeColumnsOptions<D>,
      // UseRowSelectOptions<D>,
      // UseRowStateOptions<D>,
      UseSortByOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface TableInstance<D = {}>
    extends UseTableInstanceProps<D>,
      // UseColumnOrderInstanceProps<D>,
      // UseExpandedInstanceProps<D>,
      // UseFiltersInstanceProps<D>,
      // UseGlobalFiltersInstanceProps<D>,
      // UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      // UseRowSelectInstanceProps<D>,
      // UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D = {}>  // UseColumnOrderState<D>,
    extends // UseExpandedState<D>,
      // UseFiltersState<D>,
      // UseGlobalFiltersState<D>,
      // UseGroupByState<D>,
      UsePaginationState<D>,
      // UseResizeColumnsState<D>,
      // UseRowSelectState<D>,
      // UseRowStateState<D>,
      UseSortByState<D> {}

  export interface ColumnInterface<D = {}>
    extends UseTableColumnOptions<D>,
      // UseFiltersColumnOptions<D>,
      // UseGlobalFiltersColumnOptions<D>,
      // UseGroupByColumnOptions<D>,
      // UseResizeColumnsColumnOptions<D>,
      UseSortByColumnOptions<D> {}

  export interface UseTableColumnOptions<D> {
    id?: IdType<D>;
    Header?: Renderer<HeaderProps<D>>;
    width?: number | string;
    minWidth?: number;
    maxWidth?: number;
  }

  export interface ColumnInstance<D = {}>
    extends UseTableColumnProps<D>,
      // UseFiltersColumnProps<D>,
      // UseGroupByColumnProps<D>,
      // UseResizeColumnsColumnProps<D>,
      UseSortByColumnProps<D> {}

  export interface Cell<D = {}, V = any>
    extends UseTableCellProps<D> //     UseRowStateCellProps<D> // UseGroupByCellProps<D>,
  {}

  export interface Row<D = {}> extends UseTableRowProps<D> {}

  export interface HeaderGroup<D = {}>
    extends ColumnInstance<D>,
      UseTableHeaderGroupProps<D> {}

  /**
   * useTable
   *
   * @param options
   * @param plugins
   */
  export function useTable<D = {}>(
    options: TableOptions<D>,
    ...plugins: PluginHook<D>[]
  ): TableInstance<D>;

  export interface Hooks<D = {}>
    extends UseTableHooks<D>,
      // UseExpandedHooks<D>,
      // UseGroupByHooks<D>,
      // UseRowSelectHooks<D>,
      UseSortByHooks<D> {}

  export function useSortBy<D = {}>(hooks: Hooks<D>): void;

  // export function useSortBy<D = {}>(hooks: PluginHook<D>): void;

  export namespace useSortBy {
    const pluginName = "useSortBy";
  }

  export function usePagination<D = {}>(hooks: Hooks<D>): void;

  // export function usePagination<D = {}>(hooks: PluginHook<D>): void;

  export namespace usePagination {
    const pluginName = "usePagination";
  }

  export interface PluginHook<D> {
    (hooks: Hooks<D>): void;

    pluginName?: string;
  }

  export interface UseSortByHooks<D> {
    getSortByToggleProps: Array<PropGetter<D, TableCommonProps>>;
  }

  export type UsePaginationOptions<D> = Partial<{
    pageCount: number;
    manualPagination: boolean;
    autoResetPage?: boolean;
    paginateExpandedRows: boolean;
  }>;

  export type UseSortByOptions<D> = Partial<{
    manualSortBy: boolean;
    disableSortBy: boolean;
    defaultCanSort: boolean;
    disableMultiSort: boolean;
    isMultiSortEvent: (e: MouseEvent) => boolean;
    maxMultiSortColCount: number;
    disableSortRemove: boolean;
    disabledMultiRemove: boolean;
    orderByFn: (
      rows: Array<Row<D>>,
      sortFns: Array<SortByFn<D>>,
      directions: boolean[]
    ) => Array<Row<D>>;
    sortTypes: Record<string, SortByFn<D>>;
    autoResetSortBy?: boolean;
  }>;
  export type SortByFn<D> = (
    rowA: Row<D>,
    rowB: Row<D>,
    columnId: IdType<D>,
    desc?: boolean
  ) => number;
  export type IdType<D> = StringKey<D> | string;
  export type StringKey<D> = Extract<keyof D, string>;

  export interface UseTableHooks<D> extends Record<string, any> {
    useOptions: Array<
      (options: TableOptions<D>, args: TableOptions<D>) => TableOptions<D>
    >;
    stateReducers: Array<
      (
        newState: TableState<D>,
        action: ActionType,
        previousState?: TableState<D>,
        instance?: TableInstance<D>
      ) => ReducerTableState<D> | undefined
    >;
    columns: Array<
      (columns: Array<Column<D>>, meta: Meta<D>) => Array<Column<D>>
    >;
    columnsDeps: Array<(deps: any[], meta: Meta<D>) => any[]>;
    allColumns: Array<
      (allColumns: Array<ColumnInstance<D>>, meta: Meta<D>) => Array<Column<D>>
    >;
    allColumnsDeps: Array<(deps: any[], meta: Meta<D>) => any[]>;
    visibleColumns: Array<
      (allColumns: Array<ColumnInstance<D>>, meta: Meta<D>) => Array<Column<D>>
    >;
    visibleColumnsDeps: Array<(deps: any[], meta: Meta<D>) => any[]>;
    headerGroups: Array<
      (
        allColumns: Array<HeaderGroup<D>>,
        meta: Meta<D>
      ) => Array<HeaderGroup<D>>
    >;
    headerGroupsDeps: Array<(deps: any[], meta: Meta<D>) => any[]>;
    useInstanceBeforeDimensions: Array<(instance: TableInstance<D>) => void>;
    useInstance: Array<(instance: TableInstance<D>) => void>;
    prepareRow: Array<(row: Row<D>, meta: Meta<D>) => void>;
    useControlledState: Array<
      (state: TableState<D>, meta: Meta<D>) => TableState<D>
    >;

    getTableProps: Array<TablePropGetter<D>>;
    getTableBodyProps: Array<TableBodyPropGetter<D>>;
    getHeaderGroupProps: Array<HeaderGroupPropGetter<D>>;
    getFooterGroupProps: Array<FooterGroupPropGetter<D>>;
    getHeaderProps: Array<HeaderPropGetter<D>>;
    getFooterProps: Array<FooterPropGetter<D>>;
    getRowProps: Array<RowPropGetter<D>>;
    getCellProps: Array<CellPropGetter<D>>;
    useFinalInstance: Array<(instance: TableInstance<D>) => void>;
  }

  export const actions: Record<string, string>;
  export type ActionType = { type: string } & Record<string, any>;
  export const defaultColumn: Partial<Column> & Record<string, any>;

  // Helpers
  export type CellValue<V = any> = V;

  export type Renderer<Props> =
    | ComponentType<Props>
    | ReactElement
    | ReactText
    | ReactFragment;

  export interface MetaBase<D> {
    instance: TableInstance<D>;
    userProps: any;
  }

  // inspired by ExtendState in  https://github.com/reduxjs/redux/blob/master/src/types/store.ts
  export type Meta<D, Extension = never, M = MetaBase<D>> = [
    Extension
  ] extends [never]
    ? M
    : M & Extension;
  export type TablePropGetter<D> = PropGetter<D, TableProps>;

  export type TableBodyPropGetter<D> = PropGetter<D, TableBodyProps>;

  export type HeaderPropGetter<D> = PropGetter<
    D,
    TableHeaderProps,
    { column: HeaderGroup<D> }
  >;

  export type FooterGroupPropGetter<D> = PropGetter<
    D,
    TableFooterGroupProps,
    { column: HeaderGroup<D> }
  >;

  export type HeaderGroupPropGetter<D> = PropGetter<
    D,
    TableHeaderGroupProps,
    { column: HeaderGroup<D> }
  >;

  export type FooterPropGetter<D> = PropGetter<
    D,
    TableFooterProps,
    { column: HeaderGroup<D> }
  >;

  export type RowPropGetter<D> = PropGetter<D, TableRowProps, { row: Row<D> }>;

  export type CellPropGetter<D> = PropGetter<
    D,
    TableCellProps,
    { cell: Cell<D> }
  >;

  export interface ReducerTableState<D>
    extends TableState<D>,
      Record<string, any> {}

  export type PropGetter<D, Props, T = never, P = Partial<Props>> =
    | ((props: P, meta: Meta<D, T>) => P | P[])
    | P
    | P[];

  export interface TableProps extends TableCommonProps {}

  export interface TableBodyProps extends TableCommonProps {}

  export interface TableKeyedProps extends TableCommonProps {
    key: React.Key;
  }

  export interface TableHeaderGroupProps extends TableKeyedProps {}

  export interface TableFooterGroupProps extends TableKeyedProps {}

  export interface TableHeaderProps extends TableKeyedProps {}

  export interface TableFooterProps extends TableKeyedProps {}

  export interface TableRowProps extends TableKeyedProps {}

  export interface TableCellProps extends TableKeyedProps {}

  export interface TableToggleCommonProps extends TableCommonProps {
    onChange?: () => void;
    checked?: boolean;
    title?: string;
    indeterminate?: boolean;
  }

  export interface TableCommonProps {
    style?: CSSProperties;
    className?: string;
    role?: string;
  }

  export interface UseTableInstanceProps<D> {
    state: TableState<D>;
    plugins: Array<PluginHook<D>>;
    dispatch: TableDispatch;
    columns: Array<ColumnInstance<D>>;
    allColumns: Array<ColumnInstance<D>>;
    visibleColumns: Array<ColumnInstance<D>>;
    headerGroups: Array<HeaderGroup<D>>;
    footerGroups: Array<HeaderGroup<D>>;
    headers: Array<ColumnInstance<D>>;
    flatHeaders: Array<ColumnInstance<D>>;
    rows: Array<Row<D>>;
    rowsById: Record<string, Row<D>>;
    getTableProps: (propGetter?: TablePropGetter<D>) => TableProps;
    getTableBodyProps: (propGetter?: TableBodyPropGetter<D>) => TableBodyProps;
    prepareRow: (row: Row<D>) => void;
    flatRows: Array<Row<D>>;
    totalColumnsWidth: number;
    allColumnsHidden: boolean;
    toggleHideColumn: (columnId: IdType<D>, value?: boolean) => void;
    setHiddenColumns: (
      param: Array<IdType<D>> | UpdateHiddenColumns<D>
    ) => void;
    toggleHideAllColumns: (value?: boolean) => void;
    getToggleHideAllColumnsProps: (
      props?: Partial<TableToggleHideAllColumnProps>
    ) => TableToggleHideAllColumnProps;
    getHooks: () => Hooks<D>;
  }

  type UpdateHiddenColumns<D> = (
    oldHidden: Array<IdType<D>>
  ) => Array<IdType<D>>;
  export type TableDispatch<A = any> = (action: A) => void;

  export interface TableToggleHideAllColumnProps
    extends TableToggleCommonProps {}

  export interface UsePaginationInstanceProps<D> {
    page: Array<Row<D>>;
    pageCount: number;
    pageOptions: number[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
    previousPage: () => void;
    nextPage: () => void;
    setPageSize: (pageSize: number) => void;
  }

  export interface UseSortByInstanceProps<D> {
    rows: Array<Row<D>>;
    preSortedRows: Array<Row<D>>;
    toggleSortBy: (
      columnId: IdType<D>,
      descending: boolean,
      isMulti: boolean
    ) => void;
  }

  export interface UsePaginationState<D> {
    pageSize: number;
    pageIndex: number;
  }

  export interface UseSortByState<D> {
    sortBy: Array<SortingRule<D>>;
  }

  export interface SortingRule<D> {
    id: IdType<D>;
    desc?: boolean;
  }

  export type HeaderProps<D> = TableInstance<D> & {
    column: ColumnInstance<D>;
  };
  export type UseSortByColumnOptions<D> = Partial<{
    defaultCanSort: boolean;
    disableSortBy: boolean;
    sortDescFirst: boolean;
    sortInverted: boolean;
    sortType: SortByFn<D> | DefaultSortTypes | string;
  }>;
  export type DefaultSortTypes = "alphanumeric" | "datetime" | "basic";

  export interface UseTableColumnProps<D> {
    id: IdType<D>;
    columns: Array<ColumnInstance<D>>;
    isVisible: boolean;
    render: (type: "Header" | "Footer" | string, props?: object) => ReactNode;
    totalLeft: number;
    totalWidth: number;
    getHeaderProps: (propGetter?: HeaderPropGetter<D>) => TableHeaderProps;
    getFooterProps: (propGetter?: FooterPropGetter<D>) => TableFooterProps;
    toggleHidden: (value?: boolean) => void;
    parent: ColumnInstance<D>; // not documented
    getToggleHiddenProps: (userProps?: any) => any;
    depth: number; // not documented
    index: number; // not documented
    placeholderOf?: ColumnInstance;
  }

  export interface UseSortByColumnProps<D> {
    canSort: boolean;
    toggleSortBy: (descending: boolean, multi: boolean) => void;
    getSortByToggleProps: (
      props?: Partial<TableSortByToggleProps>
    ) => TableSortByToggleProps;
    clearSortBy: () => void;
    isSorted: boolean;
    sortedIndex: number;
    isSortedDesc: boolean | undefined;
  }

  export interface TableSortByToggleProps {}

  export interface UseTableCellProps<D, V = any> {
    column: ColumnInstance<D>;
    row: Row<D>;
    value: CellValue<V>;
    getCellProps: (propGetter?: CellPropGetter<D>) => TableCellProps;
    render: (type: "Cell" | string, userProps?: object) => ReactNode;
  }

  export interface UseTableRowProps<D> {
    cells: Array<Cell<D>>;
    values: Record<IdType<D>, CellValue>;
    getRowProps: (propGetter?: RowPropGetter<D>) => TableRowProps;
    index: number;
    original: D;
    id: string;
    subRows: Array<Row<D>>;
  }

  export interface UseTableHeaderGroupProps<D> {
    headers: Array<ColumnInstance<D>>;
    getHeaderGroupProps: (
      propGetter?: HeaderGroupPropGetter<D>
    ) => TableHeaderProps;
    getFooterGroupProps: (
      propGetter?: FooterGroupPropGetter<D>
    ) => TableFooterProps;
    totalHeaderCount: number; // not documented
  }

  export type Column<D = {}> =
    | ColumnGroup<D>
    | ColumnWithLooseAccessor<D>
    | ColumnWithStrictAccessor<D>;

  export type ColumnGroup<D = {}> = ColumnInterface<D> &
    ColumnGroupInterface<D> &
    (
      | { Header: string }
      | ({ id: IdType<D> } & {
          Header: Renderer<HeaderProps<D>>;
        })
    ) & { accessor?: Accessor<D> }; // Not used, but needed for backwards compatibility

  type ValueOf<T> = T[keyof T];
  export type Accessor<D> = (
    originalRow: D,
    index: number,
    sub: {
      subRows: D[];
      depth: number;
      data: D[];
    }
  ) => CellValue;

  export interface ColumnGroupInterface<D> {
    columns: Array<Column<D>>;
  }

  export type ColumnWithStrictAccessor<D = {}> = ColumnInterface<D> &
    ValueOf<
      {
        [K in keyof D]: {
          accessor: K;
        } & ColumnInterfaceBasedOnValue<D, D[K]>;
      }
    >;

  export type ColumnWithLooseAccessor<D = {}> = ColumnInterface<D> &
    ColumnInterfaceBasedOnValue<D> &
    (
      | { Header: string }
      | { id: IdType<D> }
      | { accessor: keyof D extends never ? IdType<D> : never }
    ) & {
      accessor?: keyof D extends never ? IdType<D> | Accessor<D> : Accessor<D>;
    };

  export interface ColumnInterfaceBasedOnValue<D = {}, V = any> {
    Cell?: Renderer<CellProps<D, V>>;
  }

  export type CellProps<D, V = any> = TableInstance<D> & {
    column: ColumnInstance<D>;
    row: Row<D>;
    cell: Cell<D, V>;
    value: CellValue<V>;
  };
}
