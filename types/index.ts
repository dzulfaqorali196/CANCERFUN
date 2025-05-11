import { Icons } from "@/components/icons";

export interface NavMenuItem {
  label: string;
  href: string;
}

export interface FooterMenu {
  title: string;
  links: NavMenuItem[];
}

export enum ArticleType {
  UNKNOWN = "unknown",
  BLOG = "blog",
  NEWS = "news",
  PROJECT = "project",
  DOC = "docs",
  WHY = "why",
}

export enum IProjectPhaseCurrationStatus {
  LIVE = "Live",
  PENDING = "Pending",
}

export interface IProjectPhase {
  curation_status?: IProjectPhaseCurrationStatus;
  fundraising?: string;
  amm?: string;
}

export interface ArticleDoc {
  id: string;
  type: ArticleType;
  title: string;
  date: string;
  author: string;
  contentHtml: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
  project_phase?: IProjectPhase;
}

type MakeOptional<T> = {
  [P in keyof T]?: T[P];
};

export interface IBlogPostFrontmatter
  extends MakeOptional<Omit<ArticleDoc, "id" | "type" | "contentHtml">> {
  featured?: boolean;
}

// project

export interface IProject {
  slug: string;
  header: Header;
  phases: Phase[];
  details: Details;
  curation: Curation;
  fundraising: Fundraising;
  marketHypothesis: MarketHypothesis[];
  missionStatement: string;
  additionalDocumentation: AdditionalDocumentation[];
  projectOverview: ProjectOverview;
  researchFocusAreas: ResearchFocusArea[];
  teamCommunity: TeamCommunity;
  projectRoadmap: ProjectRoadmap[];
  valueCaptureModel: ValueCaptureModel;
  recommendedReads: RecommendedRead[];
  contentHtml: string;
}

export interface IProjectFrontmatter
  extends MakeOptional<Omit<IProject, "contentHtml">> {
  missionStatement: string;
}

export interface Header {
  title: string;
  description: string;
}

export interface Phase {
  step: string;
  name: string;
  status: "Live" | "Pending";
  action: string;
}

export interface Details {
  commitments: Commitments;
  tokens: Token[];
}

export interface Commitments {
  bioCommitted: string;
  curationLimit: string;
  totalSupply: string;
  curatorAllocation: string;
  curationFDV: string;
  numberOfCurators: string;
}

export interface Token {
  type: string;
  value: string;
}

export interface Curation {
  message: string;
  successMessage: string;
  failureMessage: string;
  fee: string;
  details: CurationDetails;
  docs: string;
}

export interface CurationDetails {
  vestingPeriodCliff: string;
  tokenSupplyForCurators: string;
  curatorLockup: string;
}

export interface Fundraising {
  type: string;
  details: FundraisingDetails;
  howItWorks: string;
  auctionDocs: string;
}

export interface FundraisingDetails {
  tokensSold: string;
  vestingPeriodCliff: string;
}

export interface MarketHypothesis {
  statistic: string;
  description: string;
}

export interface AdditionalDocumentation {
  title: string;
  url: string;
}

export interface ProjectOverview {
  description: string;
  emphasis: string;
}

export interface ResearchFocusArea {
  title: string;
  image: Image;
  description: string;
  link: string;
}

export interface Image {
  alt: string;
  src: string;
}

export interface TeamCommunity {
  members: Member[];
  socialLinks: SocialLink[];
}

export interface Member {
  name: string;
  image: Image;
  role: string;
  bio: string;
}

export interface SocialLink {
  platform: string;
  handle?: string;
  action: string;
}

export interface ProjectRoadmap {
  quarter: string;
  milestone: string;
}

export interface ValueCaptureModel {
  description: string;
  diagram: Image;
}

export interface RecommendedRead {
  title: string;
  source: string;
  image: Image;
  link: string;
}

export interface AuthSocial {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
}

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}
