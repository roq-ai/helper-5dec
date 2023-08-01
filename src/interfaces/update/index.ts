import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface UpdateInterface {
  id?: string;
  content: string;
  task_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user?: UserInterface;
  _count?: {};
}

export interface UpdateGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  task_id?: string;
  user_id?: string;
}
