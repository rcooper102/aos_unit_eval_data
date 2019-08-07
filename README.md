# AOS Unit Evaluator Data Source

This contains a big chunk of pre-programmed units. NOT FOR DISTRIBUTION.

NOTE: An import does *not* completely replace existing data. It merges it with any current data you have. (presuming the imported data to be the authority in cases of conflict)

## Exporting Your Data

```
const data = copy(window.sim.localData);
```

## Importing Your Data

```
window.sim.localData = data
```