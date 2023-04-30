import { FieldValueItem } from '../../../../util/treeview/field-value-item';
import { MessageTreeItem } from '../../../../util/treeview/message-tree-item';
import { TimeentryItem } from './item';

export type TimeentryTreeItem = MessageTreeItem | FieldValueItem | TimeentryItem;
