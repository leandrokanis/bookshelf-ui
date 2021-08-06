import { Volume } from '@/models'
import faker from 'faker'

export const mockAddress = (): Volume => {
  return {
    kind: faker.datatype.string(),
    id: faker.datatype.string(),
    etag: faker.datatype.string(),
    selfLink: faker.datatype.string(),
    volumeInfo: {
      title: faker.datatype.string(),
      subtitle: faker.datatype.string(),
      publishedDate: faker.datatype.string(),
      industryIdentifiers: [
        {
          type: faker.datatype.string(),
          identifier: faker.datatype.string(),
        },
      ],
      readingModes: {
        text: faker.datatype.boolean(),
        image: faker.datatype.boolean(),
      },
      pageCount: faker.datatype.number(),
      printType: faker.datatype.string(),
      categories: [faker.datatype.string()],
      maturityRating: faker.datatype.string(),
      allowAnonLogging: faker.datatype.boolean(),
      contentVersion: faker.datatype.string(),
      panelizationSummary: {
        containsEpubBubbles: faker.datatype.boolean(),
        containsImageBubbles: faker.datatype.boolean(),
      },
      imageLinks: {
        smallThumbnail: faker.system.commonFileName(),
        thumbnail: faker.datatype.string(),
      },
      language: faker.datatype.string(),
      previewLink: faker.datatype.string(),
      infoLink: faker.datatype.string(),
      canonicalVolumeLink: faker.datatype.string(),
    },
    saleInfo: {
      country: faker.datatype.string(),
      saleability: faker.datatype.string(),
      isEbook: faker.datatype.boolean(),
    },
    accessInfo: {
      country: faker.datatype.string(),
      viewability: faker.datatype.string(),
      embeddable: faker.datatype.boolean(),
      publicDomain: faker.datatype.boolean(),
      textToSpeechPermission: faker.datatype.string(),
      epub: {
        isAvailable: faker.datatype.boolean(),
      },
      pdf: {
        isAvailable: faker.datatype.boolean(),
      },
      webReaderLink: faker.datatype.string(),
      accessViewStatus: faker.datatype.string(),
      quoteSharingAllowed: faker.datatype.boolean(),
    },
    searchInfo: {
      textSnippet: faker.datatype.string(),
    },
  }
}
