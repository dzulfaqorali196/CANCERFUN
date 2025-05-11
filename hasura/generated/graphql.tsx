import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** Job Applicant */
export type Job_Applicants = {
  __typename?: 'job_applicants';
  additional_info?: Maybe<Scalars['String']['output']>;
  affiliation?: Maybe<Scalars['String']['output']>;
  application_id?: Maybe<Scalars['uuid']['output']>;
  cancer_research?: Maybe<Scalars['String']['output']>;
  conflict_of_interest?: Maybe<Scalars['String']['output']>;
  contributions?: Maybe<Array<Scalars['String']['output']>>;
  country: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  current_role?: Maybe<Scalars['String']['output']>;
  cv_link?: Maybe<Scalars['String']['output']>;
  decentralization?: Maybe<Scalars['String']['output']>;
  educational_background?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  expertise?: Maybe<Scalars['String']['output']>;
  full_name: Scalars['String']['output'];
  hours_per_month?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  job?: Maybe<Jobs>;
  job_id: Scalars['uuid']['output'];
  motivation?: Maybe<Scalars['String']['output']>;
  perspectives?: Maybe<Scalars['String']['output']>;
  preferred_contact: Scalars['String']['output'];
  previous_experience?: Maybe<Scalars['String']['output']>;
  publications?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "job_applicants" */
export type Job_Applicants_Aggregate = {
  __typename?: 'job_applicants_aggregate';
  aggregate?: Maybe<Job_Applicants_Aggregate_Fields>;
  nodes: Array<Job_Applicants>;
};

export type Job_Applicants_Aggregate_Bool_Exp = {
  count?: InputMaybe<Job_Applicants_Aggregate_Bool_Exp_Count>;
};

export type Job_Applicants_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Job_Applicants_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "job_applicants" */
export type Job_Applicants_Aggregate_Fields = {
  __typename?: 'job_applicants_aggregate_fields';
  avg?: Maybe<Job_Applicants_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Job_Applicants_Max_Fields>;
  min?: Maybe<Job_Applicants_Min_Fields>;
  stddev?: Maybe<Job_Applicants_Stddev_Fields>;
  stddev_pop?: Maybe<Job_Applicants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Job_Applicants_Stddev_Samp_Fields>;
  sum?: Maybe<Job_Applicants_Sum_Fields>;
  var_pop?: Maybe<Job_Applicants_Var_Pop_Fields>;
  var_samp?: Maybe<Job_Applicants_Var_Samp_Fields>;
  variance?: Maybe<Job_Applicants_Variance_Fields>;
};


/** aggregate fields of "job_applicants" */
export type Job_Applicants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "job_applicants" */
export type Job_Applicants_Aggregate_Order_By = {
  avg?: InputMaybe<Job_Applicants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Job_Applicants_Max_Order_By>;
  min?: InputMaybe<Job_Applicants_Min_Order_By>;
  stddev?: InputMaybe<Job_Applicants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Job_Applicants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Job_Applicants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Job_Applicants_Sum_Order_By>;
  var_pop?: InputMaybe<Job_Applicants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Job_Applicants_Var_Samp_Order_By>;
  variance?: InputMaybe<Job_Applicants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "job_applicants" */
export type Job_Applicants_Arr_Rel_Insert_Input = {
  data: Array<Job_Applicants_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Job_Applicants_On_Conflict>;
};

/** aggregate avg on columns */
export type Job_Applicants_Avg_Fields = {
  __typename?: 'job_applicants_avg_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "job_applicants" */
export type Job_Applicants_Avg_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "job_applicants". All fields are combined with a logical 'AND'. */
export type Job_Applicants_Bool_Exp = {
  _and?: InputMaybe<Array<Job_Applicants_Bool_Exp>>;
  _not?: InputMaybe<Job_Applicants_Bool_Exp>;
  _or?: InputMaybe<Array<Job_Applicants_Bool_Exp>>;
  additional_info?: InputMaybe<String_Comparison_Exp>;
  affiliation?: InputMaybe<String_Comparison_Exp>;
  application_id?: InputMaybe<Uuid_Comparison_Exp>;
  cancer_research?: InputMaybe<String_Comparison_Exp>;
  conflict_of_interest?: InputMaybe<String_Comparison_Exp>;
  contributions?: InputMaybe<String_Array_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_role?: InputMaybe<String_Comparison_Exp>;
  cv_link?: InputMaybe<String_Comparison_Exp>;
  decentralization?: InputMaybe<String_Comparison_Exp>;
  educational_background?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  expertise?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  hours_per_month?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job?: InputMaybe<Jobs_Bool_Exp>;
  job_id?: InputMaybe<Uuid_Comparison_Exp>;
  motivation?: InputMaybe<String_Comparison_Exp>;
  perspectives?: InputMaybe<String_Comparison_Exp>;
  preferred_contact?: InputMaybe<String_Comparison_Exp>;
  previous_experience?: InputMaybe<String_Comparison_Exp>;
  publications?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "job_applicants" */
export enum Job_Applicants_Constraint {
  /** unique or primary key constraint on columns "id" */
  ApplicantPkey = 'applicant_pkey'
}

/** input type for incrementing numeric columns in table "job_applicants" */
export type Job_Applicants_Inc_Input = {
  hours_per_month?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "job_applicants" */
export type Job_Applicants_Insert_Input = {
  additional_info?: InputMaybe<Scalars['String']['input']>;
  affiliation?: InputMaybe<Scalars['String']['input']>;
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  cancer_research?: InputMaybe<Scalars['String']['input']>;
  conflict_of_interest?: InputMaybe<Scalars['String']['input']>;
  contributions?: InputMaybe<Array<Scalars['String']['input']>>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_role?: InputMaybe<Scalars['String']['input']>;
  cv_link?: InputMaybe<Scalars['String']['input']>;
  decentralization?: InputMaybe<Scalars['String']['input']>;
  educational_background?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expertise?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  hours_per_month?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job?: InputMaybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  motivation?: InputMaybe<Scalars['String']['input']>;
  perspectives?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  previous_experience?: InputMaybe<Scalars['String']['input']>;
  publications?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Job_Applicants_Max_Fields = {
  __typename?: 'job_applicants_max_fields';
  additional_info?: Maybe<Scalars['String']['output']>;
  affiliation?: Maybe<Scalars['String']['output']>;
  application_id?: Maybe<Scalars['uuid']['output']>;
  cancer_research?: Maybe<Scalars['String']['output']>;
  conflict_of_interest?: Maybe<Scalars['String']['output']>;
  contributions?: Maybe<Array<Scalars['String']['output']>>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_role?: Maybe<Scalars['String']['output']>;
  cv_link?: Maybe<Scalars['String']['output']>;
  decentralization?: Maybe<Scalars['String']['output']>;
  educational_background?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expertise?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  hours_per_month?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job_id?: Maybe<Scalars['uuid']['output']>;
  motivation?: Maybe<Scalars['String']['output']>;
  perspectives?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  previous_experience?: Maybe<Scalars['String']['output']>;
  publications?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "job_applicants" */
export type Job_Applicants_Max_Order_By = {
  additional_info?: InputMaybe<Order_By>;
  affiliation?: InputMaybe<Order_By>;
  application_id?: InputMaybe<Order_By>;
  cancer_research?: InputMaybe<Order_By>;
  conflict_of_interest?: InputMaybe<Order_By>;
  contributions?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_role?: InputMaybe<Order_By>;
  cv_link?: InputMaybe<Order_By>;
  decentralization?: InputMaybe<Order_By>;
  educational_background?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hours_per_month?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  motivation?: InputMaybe<Order_By>;
  perspectives?: InputMaybe<Order_By>;
  preferred_contact?: InputMaybe<Order_By>;
  previous_experience?: InputMaybe<Order_By>;
  publications?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Job_Applicants_Min_Fields = {
  __typename?: 'job_applicants_min_fields';
  additional_info?: Maybe<Scalars['String']['output']>;
  affiliation?: Maybe<Scalars['String']['output']>;
  application_id?: Maybe<Scalars['uuid']['output']>;
  cancer_research?: Maybe<Scalars['String']['output']>;
  conflict_of_interest?: Maybe<Scalars['String']['output']>;
  contributions?: Maybe<Array<Scalars['String']['output']>>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_role?: Maybe<Scalars['String']['output']>;
  cv_link?: Maybe<Scalars['String']['output']>;
  decentralization?: Maybe<Scalars['String']['output']>;
  educational_background?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expertise?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  hours_per_month?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job_id?: Maybe<Scalars['uuid']['output']>;
  motivation?: Maybe<Scalars['String']['output']>;
  perspectives?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  previous_experience?: Maybe<Scalars['String']['output']>;
  publications?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "job_applicants" */
export type Job_Applicants_Min_Order_By = {
  additional_info?: InputMaybe<Order_By>;
  affiliation?: InputMaybe<Order_By>;
  application_id?: InputMaybe<Order_By>;
  cancer_research?: InputMaybe<Order_By>;
  conflict_of_interest?: InputMaybe<Order_By>;
  contributions?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_role?: InputMaybe<Order_By>;
  cv_link?: InputMaybe<Order_By>;
  decentralization?: InputMaybe<Order_By>;
  educational_background?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hours_per_month?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  motivation?: InputMaybe<Order_By>;
  perspectives?: InputMaybe<Order_By>;
  preferred_contact?: InputMaybe<Order_By>;
  previous_experience?: InputMaybe<Order_By>;
  publications?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "job_applicants" */
export type Job_Applicants_Mutation_Response = {
  __typename?: 'job_applicants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Job_Applicants>;
};

/** on_conflict condition type for table "job_applicants" */
export type Job_Applicants_On_Conflict = {
  constraint: Job_Applicants_Constraint;
  update_columns?: Array<Job_Applicants_Update_Column>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};

/** Ordering options when selecting data from "job_applicants". */
export type Job_Applicants_Order_By = {
  additional_info?: InputMaybe<Order_By>;
  affiliation?: InputMaybe<Order_By>;
  application_id?: InputMaybe<Order_By>;
  cancer_research?: InputMaybe<Order_By>;
  conflict_of_interest?: InputMaybe<Order_By>;
  contributions?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_role?: InputMaybe<Order_By>;
  cv_link?: InputMaybe<Order_By>;
  decentralization?: InputMaybe<Order_By>;
  educational_background?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expertise?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hours_per_month?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job?: InputMaybe<Jobs_Order_By>;
  job_id?: InputMaybe<Order_By>;
  motivation?: InputMaybe<Order_By>;
  perspectives?: InputMaybe<Order_By>;
  preferred_contact?: InputMaybe<Order_By>;
  previous_experience?: InputMaybe<Order_By>;
  publications?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: job_applicants */
export type Job_Applicants_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "job_applicants" */
export enum Job_Applicants_Select_Column {
  /** column name */
  AdditionalInfo = 'additional_info',
  /** column name */
  Affiliation = 'affiliation',
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CancerResearch = 'cancer_research',
  /** column name */
  ConflictOfInterest = 'conflict_of_interest',
  /** column name */
  Contributions = 'contributions',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentRole = 'current_role',
  /** column name */
  CvLink = 'cv_link',
  /** column name */
  Decentralization = 'decentralization',
  /** column name */
  EducationalBackground = 'educational_background',
  /** column name */
  Email = 'email',
  /** column name */
  Expertise = 'expertise',
  /** column name */
  FullName = 'full_name',
  /** column name */
  HoursPerMonth = 'hours_per_month',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  Motivation = 'motivation',
  /** column name */
  Perspectives = 'perspectives',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  PreviousExperience = 'previous_experience',
  /** column name */
  Publications = 'publications',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "job_applicants" */
export type Job_Applicants_Set_Input = {
  additional_info?: InputMaybe<Scalars['String']['input']>;
  affiliation?: InputMaybe<Scalars['String']['input']>;
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  cancer_research?: InputMaybe<Scalars['String']['input']>;
  conflict_of_interest?: InputMaybe<Scalars['String']['input']>;
  contributions?: InputMaybe<Array<Scalars['String']['input']>>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_role?: InputMaybe<Scalars['String']['input']>;
  cv_link?: InputMaybe<Scalars['String']['input']>;
  decentralization?: InputMaybe<Scalars['String']['input']>;
  educational_background?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expertise?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  hours_per_month?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  motivation?: InputMaybe<Scalars['String']['input']>;
  perspectives?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  previous_experience?: InputMaybe<Scalars['String']['input']>;
  publications?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Job_Applicants_Stddev_Fields = {
  __typename?: 'job_applicants_stddev_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "job_applicants" */
export type Job_Applicants_Stddev_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Job_Applicants_Stddev_Pop_Fields = {
  __typename?: 'job_applicants_stddev_pop_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "job_applicants" */
export type Job_Applicants_Stddev_Pop_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Job_Applicants_Stddev_Samp_Fields = {
  __typename?: 'job_applicants_stddev_samp_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "job_applicants" */
export type Job_Applicants_Stddev_Samp_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "job_applicants" */
export type Job_Applicants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Job_Applicants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Job_Applicants_Stream_Cursor_Value_Input = {
  additional_info?: InputMaybe<Scalars['String']['input']>;
  affiliation?: InputMaybe<Scalars['String']['input']>;
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  cancer_research?: InputMaybe<Scalars['String']['input']>;
  conflict_of_interest?: InputMaybe<Scalars['String']['input']>;
  contributions?: InputMaybe<Array<Scalars['String']['input']>>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_role?: InputMaybe<Scalars['String']['input']>;
  cv_link?: InputMaybe<Scalars['String']['input']>;
  decentralization?: InputMaybe<Scalars['String']['input']>;
  educational_background?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expertise?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  hours_per_month?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  motivation?: InputMaybe<Scalars['String']['input']>;
  perspectives?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  previous_experience?: InputMaybe<Scalars['String']['input']>;
  publications?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Job_Applicants_Sum_Fields = {
  __typename?: 'job_applicants_sum_fields';
  hours_per_month?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "job_applicants" */
export type Job_Applicants_Sum_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** update columns of table "job_applicants" */
export enum Job_Applicants_Update_Column {
  /** column name */
  AdditionalInfo = 'additional_info',
  /** column name */
  Affiliation = 'affiliation',
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  CancerResearch = 'cancer_research',
  /** column name */
  ConflictOfInterest = 'conflict_of_interest',
  /** column name */
  Contributions = 'contributions',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentRole = 'current_role',
  /** column name */
  CvLink = 'cv_link',
  /** column name */
  Decentralization = 'decentralization',
  /** column name */
  EducationalBackground = 'educational_background',
  /** column name */
  Email = 'email',
  /** column name */
  Expertise = 'expertise',
  /** column name */
  FullName = 'full_name',
  /** column name */
  HoursPerMonth = 'hours_per_month',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  Motivation = 'motivation',
  /** column name */
  Perspectives = 'perspectives',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  PreviousExperience = 'previous_experience',
  /** column name */
  Publications = 'publications',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Job_Applicants_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Job_Applicants_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Job_Applicants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Job_Applicants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Job_Applicants_Var_Pop_Fields = {
  __typename?: 'job_applicants_var_pop_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "job_applicants" */
export type Job_Applicants_Var_Pop_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Job_Applicants_Var_Samp_Fields = {
  __typename?: 'job_applicants_var_samp_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "job_applicants" */
export type Job_Applicants_Var_Samp_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Job_Applicants_Variance_Fields = {
  __typename?: 'job_applicants_variance_fields';
  hours_per_month?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "job_applicants" */
export type Job_Applicants_Variance_Order_By = {
  hours_per_month?: InputMaybe<Order_By>;
};

/** Job Applications */
export type Job_Applications = {
  __typename?: 'job_applications';
  applied_at: Scalars['timestamptz']['output'];
  extra_info?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  job: Jobs;
  job_id: Scalars['uuid']['output'];
  resume_url?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** Job Applications */
export type Job_ApplicationsExtra_InfoArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "job_applications" */
export type Job_Applications_Aggregate = {
  __typename?: 'job_applications_aggregate';
  aggregate?: Maybe<Job_Applications_Aggregate_Fields>;
  nodes: Array<Job_Applications>;
};

export type Job_Applications_Aggregate_Bool_Exp = {
  count?: InputMaybe<Job_Applications_Aggregate_Bool_Exp_Count>;
};

export type Job_Applications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Job_Applications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Job_Applications_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "job_applications" */
export type Job_Applications_Aggregate_Fields = {
  __typename?: 'job_applications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Job_Applications_Max_Fields>;
  min?: Maybe<Job_Applications_Min_Fields>;
};


/** aggregate fields of "job_applications" */
export type Job_Applications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Job_Applications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "job_applications" */
export type Job_Applications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Job_Applications_Max_Order_By>;
  min?: InputMaybe<Job_Applications_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Job_Applications_Append_Input = {
  extra_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "job_applications" */
export type Job_Applications_Arr_Rel_Insert_Input = {
  data: Array<Job_Applications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Job_Applications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "job_applications". All fields are combined with a logical 'AND'. */
export type Job_Applications_Bool_Exp = {
  _and?: InputMaybe<Array<Job_Applications_Bool_Exp>>;
  _not?: InputMaybe<Job_Applications_Bool_Exp>;
  _or?: InputMaybe<Array<Job_Applications_Bool_Exp>>;
  applied_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  extra_info?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job?: InputMaybe<Jobs_Bool_Exp>;
  job_id?: InputMaybe<Uuid_Comparison_Exp>;
  resume_url?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "job_applications" */
export enum Job_Applications_Constraint {
  /** unique or primary key constraint on columns "id" */
  JobApplicationsPkey = 'job_applications_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Job_Applications_Delete_At_Path_Input = {
  extra_info?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Job_Applications_Delete_Elem_Input = {
  extra_info?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Job_Applications_Delete_Key_Input = {
  extra_info?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "job_applications" */
export type Job_Applications_Insert_Input = {
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_info?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job?: InputMaybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  resume_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Job_Applications_Max_Fields = {
  __typename?: 'job_applications_max_fields';
  applied_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job_id?: Maybe<Scalars['uuid']['output']>;
  resume_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "job_applications" */
export type Job_Applications_Max_Order_By = {
  applied_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  resume_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Job_Applications_Min_Fields = {
  __typename?: 'job_applications_min_fields';
  applied_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job_id?: Maybe<Scalars['uuid']['output']>;
  resume_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "job_applications" */
export type Job_Applications_Min_Order_By = {
  applied_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  resume_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "job_applications" */
export type Job_Applications_Mutation_Response = {
  __typename?: 'job_applications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Job_Applications>;
};

/** on_conflict condition type for table "job_applications" */
export type Job_Applications_On_Conflict = {
  constraint: Job_Applications_Constraint;
  update_columns?: Array<Job_Applications_Update_Column>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};

/** Ordering options when selecting data from "job_applications". */
export type Job_Applications_Order_By = {
  applied_at?: InputMaybe<Order_By>;
  extra_info?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job?: InputMaybe<Jobs_Order_By>;
  job_id?: InputMaybe<Order_By>;
  resume_url?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: job_applications */
export type Job_Applications_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Job_Applications_Prepend_Input = {
  extra_info?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "job_applications" */
export enum Job_Applications_Select_Column {
  /** column name */
  AppliedAt = 'applied_at',
  /** column name */
  ExtraInfo = 'extra_info',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  ResumeUrl = 'resume_url',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "job_applications" */
export type Job_Applications_Set_Input = {
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_info?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  resume_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "job_applications" */
export type Job_Applications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Job_Applications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Job_Applications_Stream_Cursor_Value_Input = {
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_info?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job_id?: InputMaybe<Scalars['uuid']['input']>;
  resume_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "job_applications" */
export enum Job_Applications_Update_Column {
  /** column name */
  AppliedAt = 'applied_at',
  /** column name */
  ExtraInfo = 'extra_info',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  ResumeUrl = 'resume_url',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

export type Job_Applications_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Job_Applications_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Job_Applications_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Job_Applications_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Job_Applications_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Job_Applications_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Job_Applications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Job_Applications_Bool_Exp;
};

/** Jobs */
export type Jobs = {
  __typename?: 'jobs';
  /** An array relationship */
  applications: Array<Job_Applicants>;
  /** An aggregate relationship */
  applications_aggregate: Job_Applicants_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  job_applications: Array<Job_Applications>;
  /** An aggregate relationship */
  job_applications_aggregate: Job_Applications_Aggregate;
  location: Scalars['String']['output'];
  salary?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Jobs */
export type JobsApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


/** Jobs */
export type JobsApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


/** Jobs */
export type JobsJob_ApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


/** Jobs */
export type JobsJob_Applications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};

/** aggregated selection of "jobs" */
export type Jobs_Aggregate = {
  __typename?: 'jobs_aggregate';
  aggregate?: Maybe<Jobs_Aggregate_Fields>;
  nodes: Array<Jobs>;
};

/** aggregate fields of "jobs" */
export type Jobs_Aggregate_Fields = {
  __typename?: 'jobs_aggregate_fields';
  avg?: Maybe<Jobs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Jobs_Max_Fields>;
  min?: Maybe<Jobs_Min_Fields>;
  stddev?: Maybe<Jobs_Stddev_Fields>;
  stddev_pop?: Maybe<Jobs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jobs_Stddev_Samp_Fields>;
  sum?: Maybe<Jobs_Sum_Fields>;
  var_pop?: Maybe<Jobs_Var_Pop_Fields>;
  var_samp?: Maybe<Jobs_Var_Samp_Fields>;
  variance?: Maybe<Jobs_Variance_Fields>;
};


/** aggregate fields of "jobs" */
export type Jobs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jobs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Jobs_Avg_Fields = {
  __typename?: 'jobs_avg_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "jobs". All fields are combined with a logical 'AND'. */
export type Jobs_Bool_Exp = {
  _and?: InputMaybe<Array<Jobs_Bool_Exp>>;
  _not?: InputMaybe<Jobs_Bool_Exp>;
  _or?: InputMaybe<Array<Jobs_Bool_Exp>>;
  applications?: InputMaybe<Job_Applicants_Bool_Exp>;
  applications_aggregate?: InputMaybe<Job_Applicants_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job_applications?: InputMaybe<Job_Applications_Bool_Exp>;
  job_applications_aggregate?: InputMaybe<Job_Applications_Aggregate_Bool_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  salary?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "jobs" */
export enum Jobs_Constraint {
  /** unique or primary key constraint on columns "title" */
  JobsNameKey = 'jobs_name_key',
  /** unique or primary key constraint on columns "id" */
  JobsPkey = 'jobs_pkey'
}

/** input type for incrementing numeric columns in table "jobs" */
export type Jobs_Inc_Input = {
  salary?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "jobs" */
export type Jobs_Insert_Input = {
  applications?: InputMaybe<Job_Applicants_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job_applications?: InputMaybe<Job_Applications_Arr_Rel_Insert_Input>;
  location?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Jobs_Max_Fields = {
  __typename?: 'jobs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  salary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Jobs_Min_Fields = {
  __typename?: 'jobs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  salary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "jobs" */
export type Jobs_Mutation_Response = {
  __typename?: 'jobs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobs>;
};

/** input type for inserting object relation for remote table "jobs" */
export type Jobs_Obj_Rel_Insert_Input = {
  data: Jobs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Jobs_On_Conflict>;
};

/** on_conflict condition type for table "jobs" */
export type Jobs_On_Conflict = {
  constraint: Jobs_Constraint;
  update_columns?: Array<Jobs_Update_Column>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};

/** Ordering options when selecting data from "jobs". */
export type Jobs_Order_By = {
  applications_aggregate?: InputMaybe<Job_Applicants_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_applications_aggregate?: InputMaybe<Job_Applications_Aggregate_Order_By>;
  location?: InputMaybe<Order_By>;
  salary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jobs */
export type Jobs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "jobs" */
export enum Jobs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Salary = 'salary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "jobs" */
export type Jobs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Jobs_Stddev_Fields = {
  __typename?: 'jobs_stddev_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Jobs_Stddev_Pop_Fields = {
  __typename?: 'jobs_stddev_pop_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Jobs_Stddev_Samp_Fields = {
  __typename?: 'jobs_stddev_samp_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "jobs" */
export type Jobs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jobs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jobs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  salary?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Jobs_Sum_Fields = {
  __typename?: 'jobs_sum_fields';
  salary?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "jobs" */
export enum Jobs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Salary = 'salary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Jobs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Jobs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jobs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Jobs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Jobs_Var_Pop_Fields = {
  __typename?: 'jobs_var_pop_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Jobs_Var_Samp_Fields = {
  __typename?: 'jobs_var_samp_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Jobs_Variance_Fields = {
  __typename?: 'jobs_variance_fields';
  salary?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "job_applicants" */
  delete_job_applicants?: Maybe<Job_Applicants_Mutation_Response>;
  /** delete single row from the table: "job_applicants" */
  delete_job_applicants_by_pk?: Maybe<Job_Applicants>;
  /** delete data from the table: "job_applications" */
  delete_job_applications?: Maybe<Job_Applications_Mutation_Response>;
  /** delete single row from the table: "job_applications" */
  delete_job_applications_by_pk?: Maybe<Job_Applications>;
  /** delete data from the table: "jobs" */
  delete_jobs?: Maybe<Jobs_Mutation_Response>;
  /** delete single row from the table: "jobs" */
  delete_jobs_by_pk?: Maybe<Jobs>;
  /** delete data from the table: "user_educations" */
  delete_user_educations?: Maybe<User_Educations_Mutation_Response>;
  /** delete single row from the table: "user_educations" */
  delete_user_educations_by_pk?: Maybe<User_Educations>;
  /** delete data from the table: "user_experiences" */
  delete_user_experiences?: Maybe<User_Experiences_Mutation_Response>;
  /** delete single row from the table: "user_experiences" */
  delete_user_experiences_by_pk?: Maybe<User_Experiences>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "job_applicants" */
  insert_job_applicants?: Maybe<Job_Applicants_Mutation_Response>;
  /** insert a single row into the table: "job_applicants" */
  insert_job_applicants_one?: Maybe<Job_Applicants>;
  /** insert data into the table: "job_applications" */
  insert_job_applications?: Maybe<Job_Applications_Mutation_Response>;
  /** insert a single row into the table: "job_applications" */
  insert_job_applications_one?: Maybe<Job_Applications>;
  /** insert data into the table: "jobs" */
  insert_jobs?: Maybe<Jobs_Mutation_Response>;
  /** insert a single row into the table: "jobs" */
  insert_jobs_one?: Maybe<Jobs>;
  /** insert data into the table: "user_educations" */
  insert_user_educations?: Maybe<User_Educations_Mutation_Response>;
  /** insert a single row into the table: "user_educations" */
  insert_user_educations_one?: Maybe<User_Educations>;
  /** insert data into the table: "user_experiences" */
  insert_user_experiences?: Maybe<User_Experiences_Mutation_Response>;
  /** insert a single row into the table: "user_experiences" */
  insert_user_experiences_one?: Maybe<User_Experiences>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "job_applicants" */
  update_job_applicants?: Maybe<Job_Applicants_Mutation_Response>;
  /** update single row of the table: "job_applicants" */
  update_job_applicants_by_pk?: Maybe<Job_Applicants>;
  /** update multiples rows of table: "job_applicants" */
  update_job_applicants_many?: Maybe<Array<Maybe<Job_Applicants_Mutation_Response>>>;
  /** update data of the table: "job_applications" */
  update_job_applications?: Maybe<Job_Applications_Mutation_Response>;
  /** update single row of the table: "job_applications" */
  update_job_applications_by_pk?: Maybe<Job_Applications>;
  /** update multiples rows of table: "job_applications" */
  update_job_applications_many?: Maybe<Array<Maybe<Job_Applications_Mutation_Response>>>;
  /** update data of the table: "jobs" */
  update_jobs?: Maybe<Jobs_Mutation_Response>;
  /** update single row of the table: "jobs" */
  update_jobs_by_pk?: Maybe<Jobs>;
  /** update multiples rows of table: "jobs" */
  update_jobs_many?: Maybe<Array<Maybe<Jobs_Mutation_Response>>>;
  /** update data of the table: "user_educations" */
  update_user_educations?: Maybe<User_Educations_Mutation_Response>;
  /** update single row of the table: "user_educations" */
  update_user_educations_by_pk?: Maybe<User_Educations>;
  /** update multiples rows of table: "user_educations" */
  update_user_educations_many?: Maybe<Array<Maybe<User_Educations_Mutation_Response>>>;
  /** update data of the table: "user_experiences" */
  update_user_experiences?: Maybe<User_Experiences_Mutation_Response>;
  /** update single row of the table: "user_experiences" */
  update_user_experiences_by_pk?: Maybe<User_Experiences>;
  /** update multiples rows of table: "user_experiences" */
  update_user_experiences_many?: Maybe<Array<Maybe<User_Experiences_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Job_ApplicantsArgs = {
  where: Job_Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Job_Applicants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Job_ApplicationsArgs = {
  where: Job_Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Job_Applications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_JobsArgs = {
  where: Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jobs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_EducationsArgs = {
  where: User_Educations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Educations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_ExperiencesArgs = {
  where: User_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Experiences_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Job_ApplicantsArgs = {
  objects: Array<Job_Applicants_Insert_Input>;
  on_conflict?: InputMaybe<Job_Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Job_Applicants_OneArgs = {
  object: Job_Applicants_Insert_Input;
  on_conflict?: InputMaybe<Job_Applicants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Job_ApplicationsArgs = {
  objects: Array<Job_Applications_Insert_Input>;
  on_conflict?: InputMaybe<Job_Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Job_Applications_OneArgs = {
  object: Job_Applications_Insert_Input;
  on_conflict?: InputMaybe<Job_Applications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_JobsArgs = {
  objects: Array<Jobs_Insert_Input>;
  on_conflict?: InputMaybe<Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jobs_OneArgs = {
  object: Jobs_Insert_Input;
  on_conflict?: InputMaybe<Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_EducationsArgs = {
  objects: Array<User_Educations_Insert_Input>;
  on_conflict?: InputMaybe<User_Educations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Educations_OneArgs = {
  object: User_Educations_Insert_Input;
  on_conflict?: InputMaybe<User_Educations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ExperiencesArgs = {
  objects: Array<User_Experiences_Insert_Input>;
  on_conflict?: InputMaybe<User_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Experiences_OneArgs = {
  object: User_Experiences_Insert_Input;
  on_conflict?: InputMaybe<User_Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Job_ApplicantsArgs = {
  _inc?: InputMaybe<Job_Applicants_Inc_Input>;
  _set?: InputMaybe<Job_Applicants_Set_Input>;
  where: Job_Applicants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Job_Applicants_By_PkArgs = {
  _inc?: InputMaybe<Job_Applicants_Inc_Input>;
  _set?: InputMaybe<Job_Applicants_Set_Input>;
  pk_columns: Job_Applicants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Job_Applicants_ManyArgs = {
  updates: Array<Job_Applicants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Job_ApplicationsArgs = {
  _append?: InputMaybe<Job_Applications_Append_Input>;
  _delete_at_path?: InputMaybe<Job_Applications_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Job_Applications_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Job_Applications_Delete_Key_Input>;
  _prepend?: InputMaybe<Job_Applications_Prepend_Input>;
  _set?: InputMaybe<Job_Applications_Set_Input>;
  where: Job_Applications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Job_Applications_By_PkArgs = {
  _append?: InputMaybe<Job_Applications_Append_Input>;
  _delete_at_path?: InputMaybe<Job_Applications_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Job_Applications_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Job_Applications_Delete_Key_Input>;
  _prepend?: InputMaybe<Job_Applications_Prepend_Input>;
  _set?: InputMaybe<Job_Applications_Set_Input>;
  pk_columns: Job_Applications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Job_Applications_ManyArgs = {
  updates: Array<Job_Applications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_JobsArgs = {
  _inc?: InputMaybe<Jobs_Inc_Input>;
  _set?: InputMaybe<Jobs_Set_Input>;
  where: Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jobs_By_PkArgs = {
  _inc?: InputMaybe<Jobs_Inc_Input>;
  _set?: InputMaybe<Jobs_Set_Input>;
  pk_columns: Jobs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jobs_ManyArgs = {
  updates: Array<Jobs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_EducationsArgs = {
  _append?: InputMaybe<User_Educations_Append_Input>;
  _delete_at_path?: InputMaybe<User_Educations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Educations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Educations_Delete_Key_Input>;
  _inc?: InputMaybe<User_Educations_Inc_Input>;
  _prepend?: InputMaybe<User_Educations_Prepend_Input>;
  _set?: InputMaybe<User_Educations_Set_Input>;
  where: User_Educations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Educations_By_PkArgs = {
  _append?: InputMaybe<User_Educations_Append_Input>;
  _delete_at_path?: InputMaybe<User_Educations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Educations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Educations_Delete_Key_Input>;
  _inc?: InputMaybe<User_Educations_Inc_Input>;
  _prepend?: InputMaybe<User_Educations_Prepend_Input>;
  _set?: InputMaybe<User_Educations_Set_Input>;
  pk_columns: User_Educations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Educations_ManyArgs = {
  updates: Array<User_Educations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ExperiencesArgs = {
  _set?: InputMaybe<User_Experiences_Set_Input>;
  where: User_Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Experiences_By_PkArgs = {
  _set?: InputMaybe<User_Experiences_Set_Input>;
  pk_columns: User_Experiences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Experiences_ManyArgs = {
  updates: Array<User_Experiences_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "job_applicants" */
  job_applicants: Array<Job_Applicants>;
  /** fetch aggregated fields from the table: "job_applicants" */
  job_applicants_aggregate: Job_Applicants_Aggregate;
  /** fetch data from the table: "job_applicants" using primary key columns */
  job_applicants_by_pk?: Maybe<Job_Applicants>;
  /** An array relationship */
  job_applications: Array<Job_Applications>;
  /** An aggregate relationship */
  job_applications_aggregate: Job_Applications_Aggregate;
  /** fetch data from the table: "job_applications" using primary key columns */
  job_applications_by_pk?: Maybe<Job_Applications>;
  /** fetch data from the table: "jobs" */
  jobs: Array<Jobs>;
  /** fetch aggregated fields from the table: "jobs" */
  jobs_aggregate: Jobs_Aggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** An array relationship */
  user_educations: Array<User_Educations>;
  /** An aggregate relationship */
  user_educations_aggregate: User_Educations_Aggregate;
  /** fetch data from the table: "user_educations" using primary key columns */
  user_educations_by_pk?: Maybe<User_Educations>;
  /** An array relationship */
  user_experiences: Array<User_Experiences>;
  /** An aggregate relationship */
  user_experiences_aggregate: User_Experiences_Aggregate;
  /** fetch data from the table: "user_experiences" using primary key columns */
  user_experiences_by_pk?: Maybe<User_Experiences>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootJob_ApplicantsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


export type Query_RootJob_Applicants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


export type Query_RootJob_Applicants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootJob_ApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


export type Query_RootJob_Applications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


export type Query_RootJob_Applications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootJobsArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_EducationsArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


export type Query_RootUser_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


export type Query_RootUser_Educations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


export type Query_RootUser_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


export type Query_RootUser_Experiences_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "job_applicants" */
  job_applicants: Array<Job_Applicants>;
  /** fetch aggregated fields from the table: "job_applicants" */
  job_applicants_aggregate: Job_Applicants_Aggregate;
  /** fetch data from the table: "job_applicants" using primary key columns */
  job_applicants_by_pk?: Maybe<Job_Applicants>;
  /** fetch data from the table in a streaming manner: "job_applicants" */
  job_applicants_stream: Array<Job_Applicants>;
  /** An array relationship */
  job_applications: Array<Job_Applications>;
  /** An aggregate relationship */
  job_applications_aggregate: Job_Applications_Aggregate;
  /** fetch data from the table: "job_applications" using primary key columns */
  job_applications_by_pk?: Maybe<Job_Applications>;
  /** fetch data from the table in a streaming manner: "job_applications" */
  job_applications_stream: Array<Job_Applications>;
  /** fetch data from the table: "jobs" */
  jobs: Array<Jobs>;
  /** fetch aggregated fields from the table: "jobs" */
  jobs_aggregate: Jobs_Aggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** fetch data from the table in a streaming manner: "jobs" */
  jobs_stream: Array<Jobs>;
  /** An array relationship */
  user_educations: Array<User_Educations>;
  /** An aggregate relationship */
  user_educations_aggregate: User_Educations_Aggregate;
  /** fetch data from the table: "user_educations" using primary key columns */
  user_educations_by_pk?: Maybe<User_Educations>;
  /** fetch data from the table in a streaming manner: "user_educations" */
  user_educations_stream: Array<User_Educations>;
  /** An array relationship */
  user_experiences: Array<User_Experiences>;
  /** An aggregate relationship */
  user_experiences_aggregate: User_Experiences_Aggregate;
  /** fetch data from the table: "user_experiences" using primary key columns */
  user_experiences_by_pk?: Maybe<User_Experiences>;
  /** fetch data from the table in a streaming manner: "user_experiences" */
  user_experiences_stream: Array<User_Experiences>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootJob_ApplicantsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


export type Subscription_RootJob_Applicants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


export type Subscription_RootJob_Applicants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootJob_Applicants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Job_Applicants_Stream_Cursor_Input>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


export type Subscription_RootJob_ApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


export type Subscription_RootJob_Applications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


export type Subscription_RootJob_Applications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootJob_Applications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Job_Applications_Stream_Cursor_Input>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


export type Subscription_RootJobsArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Jobs_Order_By>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootJobs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Jobs_Stream_Cursor_Input>>;
  where?: InputMaybe<Jobs_Bool_Exp>;
};


export type Subscription_RootUser_EducationsArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


export type Subscription_RootUser_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


export type Subscription_RootUser_Educations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Educations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Educations_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


export type Subscription_RootUser_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


export type Subscription_RootUser_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


export type Subscription_RootUser_Experiences_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Experiences_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Experiences_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** User Educations */
export type User_Educations = {
  __typename?: 'user_educations';
  degree: Scalars['String']['output'];
  extra?: Maybe<Scalars['jsonb']['output']>;
  field_of_study?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  institution: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  year_completed?: Maybe<Scalars['Int']['output']>;
};


/** User Educations */
export type User_EducationsExtraArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_educations" */
export type User_Educations_Aggregate = {
  __typename?: 'user_educations_aggregate';
  aggregate?: Maybe<User_Educations_Aggregate_Fields>;
  nodes: Array<User_Educations>;
};

export type User_Educations_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Educations_Aggregate_Bool_Exp_Count>;
};

export type User_Educations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Educations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Educations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_educations" */
export type User_Educations_Aggregate_Fields = {
  __typename?: 'user_educations_aggregate_fields';
  avg?: Maybe<User_Educations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Educations_Max_Fields>;
  min?: Maybe<User_Educations_Min_Fields>;
  stddev?: Maybe<User_Educations_Stddev_Fields>;
  stddev_pop?: Maybe<User_Educations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Educations_Stddev_Samp_Fields>;
  sum?: Maybe<User_Educations_Sum_Fields>;
  var_pop?: Maybe<User_Educations_Var_Pop_Fields>;
  var_samp?: Maybe<User_Educations_Var_Samp_Fields>;
  variance?: Maybe<User_Educations_Variance_Fields>;
};


/** aggregate fields of "user_educations" */
export type User_Educations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Educations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_educations" */
export type User_Educations_Aggregate_Order_By = {
  avg?: InputMaybe<User_Educations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Educations_Max_Order_By>;
  min?: InputMaybe<User_Educations_Min_Order_By>;
  stddev?: InputMaybe<User_Educations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Educations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Educations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Educations_Sum_Order_By>;
  var_pop?: InputMaybe<User_Educations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Educations_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Educations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Educations_Append_Input = {
  extra?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "user_educations" */
export type User_Educations_Arr_Rel_Insert_Input = {
  data: Array<User_Educations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Educations_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Educations_Avg_Fields = {
  __typename?: 'user_educations_avg_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_educations" */
export type User_Educations_Avg_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_educations". All fields are combined with a logical 'AND'. */
export type User_Educations_Bool_Exp = {
  _and?: InputMaybe<Array<User_Educations_Bool_Exp>>;
  _not?: InputMaybe<User_Educations_Bool_Exp>;
  _or?: InputMaybe<Array<User_Educations_Bool_Exp>>;
  degree?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<Jsonb_Comparison_Exp>;
  field_of_study?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  institution?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  year_completed?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_educations" */
export enum User_Educations_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserEducationsPkey = 'user_educations_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Educations_Delete_At_Path_Input = {
  extra?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Educations_Delete_Elem_Input = {
  extra?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Educations_Delete_Key_Input = {
  extra?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "user_educations" */
export type User_Educations_Inc_Input = {
  year_completed?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_educations" */
export type User_Educations_Insert_Input = {
  degree?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['jsonb']['input']>;
  field_of_study?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year_completed?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Educations_Max_Fields = {
  __typename?: 'user_educations_max_fields';
  degree?: Maybe<Scalars['String']['output']>;
  field_of_study?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  institution?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  year_completed?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_educations" */
export type User_Educations_Max_Order_By = {
  degree?: InputMaybe<Order_By>;
  field_of_study?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_completed?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Educations_Min_Fields = {
  __typename?: 'user_educations_min_fields';
  degree?: Maybe<Scalars['String']['output']>;
  field_of_study?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  institution?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  year_completed?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_educations" */
export type User_Educations_Min_Order_By = {
  degree?: InputMaybe<Order_By>;
  field_of_study?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_completed?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_educations" */
export type User_Educations_Mutation_Response = {
  __typename?: 'user_educations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Educations>;
};

/** on_conflict condition type for table "user_educations" */
export type User_Educations_On_Conflict = {
  constraint: User_Educations_Constraint;
  update_columns?: Array<User_Educations_Update_Column>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};

/** Ordering options when selecting data from "user_educations". */
export type User_Educations_Order_By = {
  degree?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  field_of_study?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_completed?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_educations */
export type User_Educations_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Educations_Prepend_Input = {
  extra?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user_educations" */
export enum User_Educations_Select_Column {
  /** column name */
  Degree = 'degree',
  /** column name */
  Extra = 'extra',
  /** column name */
  FieldOfStudy = 'field_of_study',
  /** column name */
  Id = 'id',
  /** column name */
  Institution = 'institution',
  /** column name */
  UserId = 'user_id',
  /** column name */
  YearCompleted = 'year_completed'
}

/** input type for updating data in table "user_educations" */
export type User_Educations_Set_Input = {
  degree?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['jsonb']['input']>;
  field_of_study?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year_completed?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Educations_Stddev_Fields = {
  __typename?: 'user_educations_stddev_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_educations" */
export type User_Educations_Stddev_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Educations_Stddev_Pop_Fields = {
  __typename?: 'user_educations_stddev_pop_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_educations" */
export type User_Educations_Stddev_Pop_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Educations_Stddev_Samp_Fields = {
  __typename?: 'user_educations_stddev_samp_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_educations" */
export type User_Educations_Stddev_Samp_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_educations" */
export type User_Educations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Educations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Educations_Stream_Cursor_Value_Input = {
  degree?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['jsonb']['input']>;
  field_of_study?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  year_completed?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Educations_Sum_Fields = {
  __typename?: 'user_educations_sum_fields';
  year_completed?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_educations" */
export type User_Educations_Sum_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** update columns of table "user_educations" */
export enum User_Educations_Update_Column {
  /** column name */
  Degree = 'degree',
  /** column name */
  Extra = 'extra',
  /** column name */
  FieldOfStudy = 'field_of_study',
  /** column name */
  Id = 'id',
  /** column name */
  Institution = 'institution',
  /** column name */
  UserId = 'user_id',
  /** column name */
  YearCompleted = 'year_completed'
}

export type User_Educations_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Educations_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Educations_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Educations_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Educations_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Educations_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Educations_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Educations_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Educations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Educations_Var_Pop_Fields = {
  __typename?: 'user_educations_var_pop_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_educations" */
export type User_Educations_Var_Pop_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Educations_Var_Samp_Fields = {
  __typename?: 'user_educations_var_samp_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_educations" */
export type User_Educations_Var_Samp_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Educations_Variance_Fields = {
  __typename?: 'user_educations_variance_fields';
  year_completed?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_educations" */
export type User_Educations_Variance_Order_By = {
  year_completed?: InputMaybe<Order_By>;
};

/** User Work Experiences */
export type User_Experiences = {
  __typename?: 'user_experiences';
  achievements?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['uuid']['output'];
  institution_name: Scalars['String']['output'];
  job_title: Scalars['String']['output'];
  responsibilities?: Maybe<Scalars['String']['output']>;
  start_date: Scalars['date']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_experiences" */
export type User_Experiences_Aggregate = {
  __typename?: 'user_experiences_aggregate';
  aggregate?: Maybe<User_Experiences_Aggregate_Fields>;
  nodes: Array<User_Experiences>;
};

export type User_Experiences_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Experiences_Aggregate_Bool_Exp_Count>;
};

export type User_Experiences_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Experiences_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_experiences" */
export type User_Experiences_Aggregate_Fields = {
  __typename?: 'user_experiences_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Experiences_Max_Fields>;
  min?: Maybe<User_Experiences_Min_Fields>;
};


/** aggregate fields of "user_experiences" */
export type User_Experiences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_experiences" */
export type User_Experiences_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Experiences_Max_Order_By>;
  min?: InputMaybe<User_Experiences_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_experiences" */
export type User_Experiences_Arr_Rel_Insert_Input = {
  data: Array<User_Experiences_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Experiences_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_experiences". All fields are combined with a logical 'AND'. */
export type User_Experiences_Bool_Exp = {
  _and?: InputMaybe<Array<User_Experiences_Bool_Exp>>;
  _not?: InputMaybe<User_Experiences_Bool_Exp>;
  _or?: InputMaybe<Array<User_Experiences_Bool_Exp>>;
  achievements?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  institution_name?: InputMaybe<String_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  responsibilities?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_experiences" */
export enum User_Experiences_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserExperiencesPkey = 'user_experiences_pkey'
}

/** input type for inserting data into table "user_experiences" */
export type User_Experiences_Insert_Input = {
  achievements?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution_name?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  responsibilities?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Experiences_Max_Fields = {
  __typename?: 'user_experiences_max_fields';
  achievements?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  institution_name?: Maybe<Scalars['String']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  responsibilities?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_experiences" */
export type User_Experiences_Max_Order_By = {
  achievements?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution_name?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  responsibilities?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Experiences_Min_Fields = {
  __typename?: 'user_experiences_min_fields';
  achievements?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  institution_name?: Maybe<Scalars['String']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  responsibilities?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_experiences" */
export type User_Experiences_Min_Order_By = {
  achievements?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution_name?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  responsibilities?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_experiences" */
export type User_Experiences_Mutation_Response = {
  __typename?: 'user_experiences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Experiences>;
};

/** on_conflict condition type for table "user_experiences" */
export type User_Experiences_On_Conflict = {
  constraint: User_Experiences_Constraint;
  update_columns?: Array<User_Experiences_Update_Column>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};

/** Ordering options when selecting data from "user_experiences". */
export type User_Experiences_Order_By = {
  achievements?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  institution_name?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  responsibilities?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_experiences */
export type User_Experiences_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_experiences" */
export enum User_Experiences_Select_Column {
  /** column name */
  Achievements = 'achievements',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionName = 'institution_name',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Responsibilities = 'responsibilities',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_experiences" */
export type User_Experiences_Set_Input = {
  achievements?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution_name?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  responsibilities?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_experiences" */
export type User_Experiences_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Experiences_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Experiences_Stream_Cursor_Value_Input = {
  achievements?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  institution_name?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  responsibilities?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_experiences" */
export enum User_Experiences_Update_Column {
  /** column name */
  Achievements = 'achievements',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  InstitutionName = 'institution_name',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Responsibilities = 'responsibilities',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UserId = 'user_id'
}

export type User_Experiences_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Experiences_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Experiences_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  address?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  applications: Array<Job_Applicants>;
  /** An aggregate relationship */
  applications_aggregate: Job_Applicants_Aggregate;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  job_applications: Array<Job_Applications>;
  /** An aggregate relationship */
  job_applications_aggregate: Job_Applications_Aggregate;
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  otp_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  password?: Maybe<Scalars['bpchar']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  reset_otp?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['jsonb']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_educations: Array<User_Educations>;
  /** An aggregate relationship */
  user_educations_aggregate: User_Educations_Aggregate;
  /** An array relationship */
  user_experiences: Array<User_Experiences>;
  /** An aggregate relationship */
  user_experiences_aggregate: User_Experiences_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAddressArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applicants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applicants_Order_By>>;
  where?: InputMaybe<Job_Applicants_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersJob_ApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersJob_Applications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Job_Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Job_Applications_Order_By>>;
  where?: InputMaybe<Job_Applications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSocialsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersUser_EducationsArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Educations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Educations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Educations_Order_By>>;
  where?: InputMaybe<User_Educations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_ExperiencesArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Experiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Experiences_Order_By>>;
  where?: InputMaybe<User_Experiences_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  socials?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  address?: InputMaybe<Jsonb_Comparison_Exp>;
  applications?: InputMaybe<Job_Applicants_Bool_Exp>;
  applications_aggregate?: InputMaybe<Job_Applicants_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  job_applications?: InputMaybe<Job_Applications_Bool_Exp>;
  job_applications_aggregate?: InputMaybe<Job_Applications_Aggregate_Bool_Exp>;
  mobile?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  otp_expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  password?: InputMaybe<Bpchar_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  preferred_contact?: InputMaybe<String_Comparison_Exp>;
  reset_otp?: InputMaybe<String_Comparison_Exp>;
  reset_token?: InputMaybe<String_Comparison_Exp>;
  socials?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_educations?: InputMaybe<User_Educations_Bool_Exp>;
  user_educations_aggregate?: InputMaybe<User_Educations_Aggregate_Bool_Exp>;
  user_experiences?: InputMaybe<User_Experiences_Bool_Exp>;
  user_experiences_aggregate?: InputMaybe<User_Experiences_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  address?: InputMaybe<Array<Scalars['String']['input']>>;
  socials?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  address?: InputMaybe<Scalars['Int']['input']>;
  socials?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  applications?: InputMaybe<Job_Applicants_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  job_applications?: InputMaybe<Job_Applications_Arr_Rel_Insert_Input>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otp_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['bpchar']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  reset_otp?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_educations?: InputMaybe<User_Educations_Arr_Rel_Insert_Input>;
  user_experiences?: InputMaybe<User_Experiences_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otp_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  password?: Maybe<Scalars['bpchar']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  reset_otp?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otp_expires_at?: Maybe<Scalars['timestamptz']['output']>;
  password?: Maybe<Scalars['bpchar']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  preferred_contact?: Maybe<Scalars['String']['output']>;
  reset_otp?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: InputMaybe<Order_By>;
  applications_aggregate?: InputMaybe<Job_Applicants_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  job_applications_aggregate?: InputMaybe<Job_Applications_Aggregate_Order_By>;
  mobile?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  otp_expires_at?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  preferred_contact?: InputMaybe<Order_By>;
  reset_otp?: InputMaybe<Order_By>;
  reset_token?: InputMaybe<Order_By>;
  socials?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_educations_aggregate?: InputMaybe<User_Educations_Aggregate_Order_By>;
  user_experiences_aggregate?: InputMaybe<User_Experiences_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  socials?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  OtpExpiresAt = 'otp_expires_at',
  /** column name */
  Password = 'password',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  ResetOtp = 'reset_otp',
  /** column name */
  ResetToken = 'reset_token',
  /** column name */
  Socials = 'socials',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otp_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['bpchar']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  reset_otp?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otp_expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password?: InputMaybe<Scalars['bpchar']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  preferred_contact?: InputMaybe<Scalars['String']['input']>;
  reset_otp?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  OtpExpiresAt = 'otp_expires_at',
  /** column name */
  Password = 'password',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PreferredContact = 'preferred_contact',
  /** column name */
  ResetOtp = 'reset_otp',
  /** column name */
  ResetToken = 'reset_token',
  /** column name */
  Socials = 'socials',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type JobPartsFragment = { __typename?: 'jobs', id: any, title: string, description?: string | null, location: string, salary?: number | null, created_at: any, updated_at?: any | null };

export type GetJobDetailsQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetJobDetailsQuery = { __typename?: 'query_root', jobs_by_pk?: { __typename?: 'jobs', id: any, title: string, description?: string | null, location: string, salary?: number | null, created_at: any, updated_at?: any | null, job_applications_aggregate: { __typename?: 'job_applications_aggregate', aggregate?: { __typename?: 'job_applications_aggregate_fields', count: number } | null } } | null };

export type GetUserJobApplicationQueryVariables = Exact<{
  job_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
}>;


export type GetUserJobApplicationQuery = { __typename?: 'query_root', job_applications: Array<{ __typename?: 'job_applications', id: any, job_id: any, user_id: any, applied_at: any, status: string, extra_info?: any | null, resume_url?: string | null, job: { __typename?: 'jobs', title: string } }> };

export type UpdateJobApplicationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Job_Applications_Set_Input;
}>;


export type UpdateJobApplicationMutation = { __typename?: 'mutation_root', update_job_applications_by_pk?: { __typename?: 'job_applications', id: any, job_id: any, user_id: any, applied_at: any, status: string, extra_info?: any | null, resume_url?: string | null } | null };

export type GetJobsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetJobsQuery = { __typename?: 'query_root', jobs: Array<{ __typename?: 'jobs', id: any, title: string, description?: string | null, location: string, salary?: number | null, created_at: any, updated_at?: any | null }> };

export type CreateJobMutationVariables = Exact<{
  input: Jobs_Insert_Input;
}>;


export type CreateJobMutation = { __typename?: 'mutation_root', insert_jobs_one?: { __typename?: 'jobs', id: any, title: string, description?: string | null, location: string, salary?: number | null, created_at: any, updated_at?: any | null } | null };

export type UpdateJobMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Jobs_Set_Input;
}>;


export type UpdateJobMutation = { __typename?: 'mutation_root', update_jobs_by_pk?: { __typename?: 'jobs', id: any, title: string, description?: string | null, location: string, salary?: number | null, created_at: any, updated_at?: any | null } | null };

export type DeleteJobMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteJobMutation = { __typename?: 'mutation_root', delete_jobs_by_pk?: { __typename?: 'jobs', id: any } | null };

export type CreateJobApplicationMutationVariables = Exact<{
  input: Job_Applications_Insert_Input;
}>;


export type CreateJobApplicationMutation = { __typename?: 'mutation_root', insert_job_applications_one?: { __typename?: 'job_applications', id: any, job_id: any, user_id: any, applied_at: any, status: string, extra_info?: any | null, resume_url?: string | null } | null };

export const JobPartsFragmentDoc = gql`
    fragment JobParts on jobs {
  id
  title
  description
  location
  salary
  created_at
  updated_at
}
    `;
export const GetJobDetailsDocument = gql`
    query GetJobDetails($id: uuid!) {
  jobs_by_pk(id: $id) {
    ...JobParts
    job_applications_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${JobPartsFragmentDoc}`;

/**
 * __useGetJobDetailsQuery__
 *
 * To run a query within a React component, call `useGetJobDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetJobDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetJobDetailsQuery, GetJobDetailsQueryVariables> & ({ variables: GetJobDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobDetailsQuery, GetJobDetailsQueryVariables>(GetJobDetailsDocument, options);
      }
export function useGetJobDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobDetailsQuery, GetJobDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobDetailsQuery, GetJobDetailsQueryVariables>(GetJobDetailsDocument, options);
        }
export function useGetJobDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobDetailsQuery, GetJobDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobDetailsQuery, GetJobDetailsQueryVariables>(GetJobDetailsDocument, options);
        }
export type GetJobDetailsQueryHookResult = ReturnType<typeof useGetJobDetailsQuery>;
export type GetJobDetailsLazyQueryHookResult = ReturnType<typeof useGetJobDetailsLazyQuery>;
export type GetJobDetailsSuspenseQueryHookResult = ReturnType<typeof useGetJobDetailsSuspenseQuery>;
export type GetJobDetailsQueryResult = Apollo.QueryResult<GetJobDetailsQuery, GetJobDetailsQueryVariables>;
export const GetUserJobApplicationDocument = gql`
    query GetUserJobApplication($job_id: uuid!, $user_id: uuid!) {
  job_applications(where: {job_id: {_eq: $job_id}, user_id: {_eq: $user_id}}) {
    id
    job_id
    user_id
    applied_at
    status
    extra_info
    resume_url
    job {
      title
    }
  }
}
    `;

/**
 * __useGetUserJobApplicationQuery__
 *
 * To run a query within a React component, call `useGetUserJobApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserJobApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserJobApplicationQuery({
 *   variables: {
 *      job_id: // value for 'job_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserJobApplicationQuery(baseOptions: Apollo.QueryHookOptions<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables> & ({ variables: GetUserJobApplicationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>(GetUserJobApplicationDocument, options);
      }
export function useGetUserJobApplicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>(GetUserJobApplicationDocument, options);
        }
export function useGetUserJobApplicationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>(GetUserJobApplicationDocument, options);
        }
export type GetUserJobApplicationQueryHookResult = ReturnType<typeof useGetUserJobApplicationQuery>;
export type GetUserJobApplicationLazyQueryHookResult = ReturnType<typeof useGetUserJobApplicationLazyQuery>;
export type GetUserJobApplicationSuspenseQueryHookResult = ReturnType<typeof useGetUserJobApplicationSuspenseQuery>;
export type GetUserJobApplicationQueryResult = Apollo.QueryResult<GetUserJobApplicationQuery, GetUserJobApplicationQueryVariables>;
export const UpdateJobApplicationDocument = gql`
    mutation UpdateJobApplication($id: uuid!, $input: job_applications_set_input!) {
  update_job_applications_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
    job_id
    user_id
    applied_at
    status
    extra_info
    resume_url
  }
}
    `;
export type UpdateJobApplicationMutationFn = Apollo.MutationFunction<UpdateJobApplicationMutation, UpdateJobApplicationMutationVariables>;

/**
 * __useUpdateJobApplicationMutation__
 *
 * To run a mutation, you first call `useUpdateJobApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobApplicationMutation, { data, loading, error }] = useUpdateJobApplicationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateJobApplicationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobApplicationMutation, UpdateJobApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobApplicationMutation, UpdateJobApplicationMutationVariables>(UpdateJobApplicationDocument, options);
      }
export type UpdateJobApplicationMutationHookResult = ReturnType<typeof useUpdateJobApplicationMutation>;
export type UpdateJobApplicationMutationResult = Apollo.MutationResult<UpdateJobApplicationMutation>;
export type UpdateJobApplicationMutationOptions = Apollo.BaseMutationOptions<UpdateJobApplicationMutation, UpdateJobApplicationMutationVariables>;
export const GetJobsDocument = gql`
    query GetJobs($limit: Int = 10, $offset: Int = 0) {
  jobs(limit: $limit, offset: $offset, order_by: {created_at: desc}) {
    ...JobParts
  }
}
    ${JobPartsFragmentDoc}`;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export function useGetJobsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsSuspenseQueryHookResult = ReturnType<typeof useGetJobsSuspenseQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;
export const CreateJobDocument = gql`
    mutation CreateJob($input: jobs_insert_input!) {
  insert_jobs_one(object: $input) {
    ...JobParts
  }
}
    ${JobPartsFragmentDoc}`;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const UpdateJobDocument = gql`
    mutation UpdateJob($id: uuid!, $input: jobs_set_input!) {
  update_jobs_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...JobParts
  }
}
    ${JobPartsFragmentDoc}`;
export type UpdateJobMutationFn = Apollo.MutationFunction<UpdateJobMutation, UpdateJobMutationVariables>;

/**
 * __useUpdateJobMutation__
 *
 * To run a mutation, you first call `useUpdateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobMutation, { data, loading, error }] = useUpdateJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateJobMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobMutation, UpdateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UpdateJobDocument, options);
      }
export type UpdateJobMutationHookResult = ReturnType<typeof useUpdateJobMutation>;
export type UpdateJobMutationResult = Apollo.MutationResult<UpdateJobMutation>;
export type UpdateJobMutationOptions = Apollo.BaseMutationOptions<UpdateJobMutation, UpdateJobMutationVariables>;
export const DeleteJobDocument = gql`
    mutation DeleteJob($id: uuid!) {
  delete_jobs_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteJobMutationFn = Apollo.MutationFunction<DeleteJobMutation, DeleteJobMutationVariables>;

/**
 * __useDeleteJobMutation__
 *
 * To run a mutation, you first call `useDeleteJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobMutation, { data, loading, error }] = useDeleteJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobMutation, DeleteJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobMutation, DeleteJobMutationVariables>(DeleteJobDocument, options);
      }
export type DeleteJobMutationHookResult = ReturnType<typeof useDeleteJobMutation>;
export type DeleteJobMutationResult = Apollo.MutationResult<DeleteJobMutation>;
export type DeleteJobMutationOptions = Apollo.BaseMutationOptions<DeleteJobMutation, DeleteJobMutationVariables>;
export const CreateJobApplicationDocument = gql`
    mutation CreateJobApplication($input: job_applications_insert_input!) {
  insert_job_applications_one(object: $input) {
    id
    job_id
    user_id
    applied_at
    status
    extra_info
    resume_url
  }
}
    `;
export type CreateJobApplicationMutationFn = Apollo.MutationFunction<CreateJobApplicationMutation, CreateJobApplicationMutationVariables>;

/**
 * __useCreateJobApplicationMutation__
 *
 * To run a mutation, you first call `useCreateJobApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobApplicationMutation, { data, loading, error }] = useCreateJobApplicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJobApplicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobApplicationMutation, CreateJobApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobApplicationMutation, CreateJobApplicationMutationVariables>(CreateJobApplicationDocument, options);
      }
export type CreateJobApplicationMutationHookResult = ReturnType<typeof useCreateJobApplicationMutation>;
export type CreateJobApplicationMutationResult = Apollo.MutationResult<CreateJobApplicationMutation>;
export type CreateJobApplicationMutationOptions = Apollo.BaseMutationOptions<CreateJobApplicationMutation, CreateJobApplicationMutationVariables>;