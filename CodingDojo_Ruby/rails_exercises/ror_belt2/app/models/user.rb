class User < ActiveRecord::Base
  has_one :playlist
  has_many :songs, through: :playlist, source: :song # delete this line
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  validates :first_name, :last_name, presence: true

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  validates :password, presence:true, confirmation: true, on: :create
end
