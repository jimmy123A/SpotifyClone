/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategoryId = /* GraphQL */ `
  subscription OnCreateAlbumCategoryId {
    onCreateAlbumCategoryID {
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
export const onUpdateAlbumCategoryId = /* GraphQL */ `
  subscription OnUpdateAlbumCategoryId {
    onUpdateAlbumCategoryID {
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
export const onDeleteAlbumCategoryId = /* GraphQL */ `
  subscription OnDeleteAlbumCategoryId {
    onDeleteAlbumCategoryID {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
