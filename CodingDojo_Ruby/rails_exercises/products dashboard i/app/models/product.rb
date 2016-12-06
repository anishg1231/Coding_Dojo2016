class Product < ActiveRecord::Base
  belongs_to :category
  validates :name, :pricing, :description, presence: :true
end
