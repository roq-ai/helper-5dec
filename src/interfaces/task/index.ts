import { UpdateInterface } from 'interfaces/update';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  project_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  update?: UpdateInterface[];
  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {
    update?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  project_id?: string;
  user_id?: string;
}
