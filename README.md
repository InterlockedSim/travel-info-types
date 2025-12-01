This project provides TypeScript types for the real-time _InfoPlus_ travel information that is provided by the Dutch railway operator NS.

## Background

NS provides various travel information services for both internal and external use. They are made available as open data by [NDOV Loket](https://ndovloket.nl/); please refer to their site for information about the services available. This package provides types for the _DVS_, _RIT_, _VI_ and _VTB_ service based on the provided XSDs.

There are various inconsistencies and spelling errors that have, reluctantly, been left as-is.

## Parsing data

The travel information is structured as XML. We suggest using [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) to parse the messages.

### Attributes

To allow for representation of attributes, they are added as a property with the prefix `@_`. In the case of text nodes with attributes, the actual value can be accessed via `value`.

### Parsing example

#### Setting up the parser

```typescript
import { XMLParser } from 'fast-xml-parser';
import { arrayFields } from 'travel-info-types';

const parser = new XMLParser({
    ignoreAttributes: false,
    textNodeName: 'value',
    removeNSPrefix: true
});
```

#### Parsing a message

`ReisInformatieBoodschap` is the message container.

```typescript
const rib = parser.parse(rawMessage) as ReisInformatieBoodschap;
```

If you already know the kind of message you're going to receive, you can narrow the type down:

```typescript
const rib = parser.parse(
    rawMessage
) as ReisInformatieBoodschap<ReisInformatieBoodschapDVS>;
const dvs =
    rib.PutReisInformatieBoodschapIn.ReisInformatieProductDVS
        .DynamischeVertrekStaat;
```
