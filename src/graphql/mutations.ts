/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbumCategoryId = /* GraphQL */ `
  mutation CreateAlbumCategoryId(
    $input: CreateAlbumCategoryIDInput!
    $condition: ModelAlbumCategoryIDConditionInput
  ) {
    createAlbumCategoryID(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOflLikes
          imageURL
          imageUri
          artistHeadLine
          AlbumCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbumCategoryId = /* GraphQL */ `
  mutation UpdateAlbumCategoryId(
    $input: UpdateAlbumCategoryIDInput!
    $condition: ModelAlbumCategoryIDConditionInput
  ) {
    updateAlbumCategoryID(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOflLikes
          imageURL
          imageUri
          artistHeadLine
          AlbumCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbumCategoryId = /* GraphQL */ `
  mutation DeleteAlbumCategoryId(
    $input: DeleteAlbumCategoryIDInput!
    $condition: ModelAlbumCategoryIDConditionInput
  ) {
    deleteAlbumCategoryID(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOflLikes
          imageURL
          imageUri
          artistHeadLine
          AlbumCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOflLikes
      imageURL
      imageUri
      artistHeadLine
      songs {
        items {
          id
          imageUri
          title
          artist
          uri
          albumID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      AlbumCategoryID
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOflLikes
      imageURL
      imageUri
      artistHeadLine
      songs {
        items {
          id
          imageUri
          title
          artist
          uri
          albumID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      AlbumCategoryID
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOflLikes
      imageURL
      imageUri
      artistHeadLine
      songs {
        items {
          id
          imageUri
          title
          artist
          uri
          albumID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      AlbumCategoryID
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      imageUri
      title
      artist
      uri
      albumID
      album {
        id
        name
        by
        numberOflLikes
        imageURL
        imageUri
        artistHeadLine
        songs {
          nextToken
        }
        AlbumCategoryID
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      imageUri
      title
      artist
      uri
      albumID
      album {
        id
        name
        by
        numberOflLikes
        imageURL
        imageUri
        artistHeadLine
        songs {
          nextToken
        }
        AlbumCategoryID
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      imageUri
      title
      artist
      uri
      albumID
      album {
        id
        name
        by
        numberOflLikes
        imageURL
        imageUri
        artistHeadLine
        songs {
          nextToken
        }
        AlbumCategoryID
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
