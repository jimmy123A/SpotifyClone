/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategoryId = /* GraphQL */ `
  query GetAlbumCategoryId($id: ID!) {
    getAlbumCategoryID(id: $id) {
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
export const listAlbumCategoryIDs = /* GraphQL */ `
  query ListAlbumCategoryIDs(
    $filter: ModelAlbumCategoryIDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategoryIDs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
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
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          AlbumCategoryID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
