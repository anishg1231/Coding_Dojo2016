class Borrower < ActiveRecord::Base
  has_secure_password
  has_many :histories
  has_many :lenders, through: :histories, source: :lender


  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  validates :first_name, presence: true

  validates :last_name, presence: true

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  validates :password, presence: true, confirmation: true, on: :create

  validates :purpose, presence: true

  validates :description, presence: true
end
