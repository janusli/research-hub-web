import {GetResultsListItem} from "./ResultsListItemInterface";
import {Person} from "./Person";
import {OrgUnit} from "./OrgUnit";
import {Policy} from "./Policy";
import {GuideCategory} from "./GuideCategory";


export class Content implements GetResultsListItem {
  id: number;
  name: string;
  summary: string;
  description: string;
  actionableInfo: string;
  additionalInfo: string;
  callToAction: string;
  image: string;
  orgUnits: Array<OrgUnit>;
  people: Array<Person>;
  policies: Array<Policy>;
  guideCategories: Array<GuideCategory>;

  static fromObjects(objects: [Object]): Array<Content> {
    const contentItems = new Array<Content>();

    if (objects !== undefined) {
      for (const object of objects) {
        contentItems.push(Content.fromObject(object));

        contentItems.sort((a: Content, b: Content) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }

    return contentItems;
  }

  static fromObject(object: Object): Content {
    const content = new Content();

    content.id = object['id'];
    content.name = object['name'];
    content.summary = object['summary'];
    content.description = object['description'];
    content.actionableInfo = object['actionableInfo'];
    content.additionalInfo = object['additionalInfo'];
    content.callToAction = object['callToAction'];
    content.image = object['image'];
    content.orgUnits = OrgUnit.fromObjects(object['orgUnits']);
    content.people = Person.fromObjects(object['people']);
    content.policies = Policy.fromObjects(object['policies']);
    content.guideCategories = GuideCategory.fromObjects(object['guideCategories']);

    return content;
  }



  getMainOrgUnit(): OrgUnit {
    if (this.orgUnits.length > 0) {
      return this.orgUnits[0];
    }

    return undefined;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.name;
  }

  getSubtitle(): string {
    return this.summary;
  }

  getImage(): string {
    return this.image;
  }

  getDefaultRouterLink(): [any] {
    if (this.guideCategories.length > 0) {
      return ['/guides', this.id];
    } else {
      return ['/resources', this.id];
    }
  }

  getHref(): string {
    return undefined;
  }
}
