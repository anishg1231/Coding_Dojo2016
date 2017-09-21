class Song < ActiveRecord::Base
  has_many :playlists
  has_many :users, through: :playlist, source: :user

  validates :title, length: { minimum: 2 }, presence: true

  validates :artist, length: { minimum: 2 }, presence: true

end

# has_many :playlist_songs
# has_many :playlists, through: :playlist_songs, source: 'Playlist'
