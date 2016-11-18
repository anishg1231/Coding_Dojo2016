class CreateMathdojos < ActiveRecord::Migration
  def change
    create_table :mathdojos do |t|

      t.timestamps
    end
  end
end
