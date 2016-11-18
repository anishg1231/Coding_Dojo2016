class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :secret_id
      t.integer :like_count, default: 0
      t.boolean :like, default: false

      t.timestamps
    end
  end
end
