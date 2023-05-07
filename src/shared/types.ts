export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}


export interface ClassType {
  name: string;
  // description?: string; 
  description: string;
  image: string;
}
// the ? at descrip means optional, its used when we don't have a specific value