# AOS Unit Evaluator Data Source

This contains a big chunk of pre-programmed units. NOT FOR DISTRIBUTION.

NOTE: An import does *not* completely replace existing data. It merges it with any current data you have. (presuming the imported data to be the authority in cases of conflict)

All units are presumed to be at max unit size or max wounds and *not* under the influence of any non static buffs.

## Exporting Your Data

```
const data = window.sim.localData;
```

## Importing Your Data

You can import a blob of data directly by passing it to the `importLocalData` method.

```
window.sim.importLocalData(data);
```

You can also import directly from the repo by passing the text file name to the `importLocalData` method.

```
window.sim.importLocalData(`slaanesh.txt`);
```

If you wish for the imported data to *replace* all existing data instead of merge, pase `true` as a second argument.

```
window.sim.importLocalData(`slaanesh.txt`, true);
```

## Ommited Profiles

Some profiles have been ommited because the simulator is unable to simulate their profiles. (Due to strange interactions that are not currently accounted for)

- Chaos Spawn (Beasts of Chaos) - One attack impacts another. *Fixable*
- Chainghasts (Nighthaunt) - Attack profile dependant on number of nearby models. *Unfixable*
- Vargheists (Legions of Nagash) - Gains additional attacks after slaying models. *Unfixable*
- Terrorgheist (Legions of Nagash) - Auto wound. *Fixable*
- Bone Giant (Tomb Kings) - Can pile in again some of the time. *Fixable*
- Ylthari + Guardians (Sylvaneth) - Impossible to break points individually. *Unfixable*
- Carnosaur (Seraphon) - Can't account for forelimb hit *fixable*
- Saurus Scar-Veteran on Cold One - Can't account for "attack again" effect *fixable*
- Kroxigor - Moon hammer is based on enemies nearby *unfixable*
- Kroxigor - Jaws are MWs based on a dice off *fixable*
- Bastiladon - Ark of Sotek based on number of nearby enemy units *unfixable*
- Ripperdactyl Riders - Keep attacking until they miss *fixable*