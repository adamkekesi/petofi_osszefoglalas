import { Dictionary } from "vue-router/types/router";

const locations: Dictionary<string> = {
  Aszód: "47.669079, 19.476137",
  Debrecen: "47.507981, 21.663777",
  Diószeg: "48.198636, 17.643110",
  Eperjes: "48.977354, 21.224939",
  Erdőd: "47.640636, 22.884650",
  Igló: "48.925744, 20.554100",
  Kecskemét: "46.929398, 19.686952",
  Kiskunfélegyháza: "46.724719, 19.863613",
  Kiskőrös: "46.623896, 19.311766",
  Komárom: "47.735751, 18.115225",
  Késmárk: "49.141789, 20.423859",
  Nagykároly: "47.677172, 22.459702",
  Ostffyasszonyfa: "47.316997, 17.039723",
  Ozora: "46.744648, 18.396401",
  Pest: "47.470464, 19.196163",
  Pozsony: "48.128893, 17.138101",
  Pápa: "47.317955, 17.473296",
  Rimaszombat: "48.377724, 20.001248",
  Rozsnyó: "48.670109, 20.544966",
  Segesvár: "46.217541, 24.794565",
  Selmec: "48.445001, 18.900205",
  Selmecbánya: "48.445001, 18.900205",
  Sopron: "47.671162, 16.612494",
  Szabadszállás: "46.871397, 19.243024",
  Szalkszentmárton: "46.968943, 19.018973",
  Székelyhíd: "47.349698, 22.098715",
  Székesfehérvár: "47.179814, 18.434041",
  Sárszentlőrinc: "46.620521, 18.599211",
  Zágráb: "45.805043, 15.977990",
};

export default class Location {
  public name: string;
  public coords: { lat: number; lng: number };

  constructor(name: string) {
    this.name = name;
    const location = locations[name];
    const coordsArray = location.split(", ").map((x) => Number.parseFloat(x));
    this.coords = { lat: coordsArray[0], lng: coordsArray[1] };
  }
}

export const getLocations = () => {
  return locations;
};
