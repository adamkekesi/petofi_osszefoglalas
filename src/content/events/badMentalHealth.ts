import Event from "@/models/Event";
import DefaultEventDisplay from "@/components/events/DefaultEventDisplay";
import PastDate from "@/models/PastDate";
import NestedEventDisplay from "@/components/events/NestedEventDisplay";
import Location from "@/models/Location";

export default [
  new Event(
    [],
    NestedEventDisplay.create(
      "Megismerkedett Mednyánszky Bertával, de a lány apja nem egyezett bele a házasságba",
      [DefaultEventDisplay.create("1845 október Szerelem gyöngyei")]
    )
  ),

  new Event(
    [new Location("Szalkszentmárton")],
    NestedEventDisplay.create(
      "1845 novemberétől 1846 márc 10-ig szüleinél, Szalkszentmártonon lakott",
      [
        DefaultEventDisplay.create("Rossz lett a lelkiállapota"),
        DefaultEventDisplay.create("1846 április: Felhők"),
        DefaultEventDisplay.create("1846: Tigris és hiéna"),
      ]
    ),
    DefaultEventDisplay.create("Szalkszentmártonon lakott a szüleinél"),
    DefaultEventDisplay.create("Szalkszentmártonon lakott a szüleinél"),
    new PastDate(1845, 11),
    new PastDate(1846, 3, 10)
  ),
];
