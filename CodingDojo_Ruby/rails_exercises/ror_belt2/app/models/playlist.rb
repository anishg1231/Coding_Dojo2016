class Playlist < ActiveRecord::Base
  belongs_to :song
  belongs_to :user
end
#has_many :playlist_songs
#has_many :songs, through: :playlist_songs, source: 'Song'
