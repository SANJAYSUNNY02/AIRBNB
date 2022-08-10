export class Users {
  constructor(
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public confirmPassword: string
  ) {}
}
export class NewUsers {
  constructor(public users: Users[]) {}
}
export class Image {
  constructor(public placeImg: string) {}
}
export class Adcarousels {
  constructor(public adcarousels: Adcarousel[]) {}
}
export class Adcarousel {
  constructor(
    public placeName: string,
    public rent: string,
    public id: number,
    public images: Image[]
  ) {}
}

export class DescImage {
  constructor(public placeImg: string) {}
}
export class PlaceDetails {
  constructor(public placeDetails: PlaceDetail[]) {}
}
export class PlaceDetail {
  constructor(
    public placeName: string,
    public rent: string,
    public id: number,
    public images: DescImage[],
    public Location: string,
    public rating: string,
    public reviews: string,
    public hostName: string,
    public rooms: string,
    public hostImage: string,
    public mapLocationSrc: string
  ) {}
}
