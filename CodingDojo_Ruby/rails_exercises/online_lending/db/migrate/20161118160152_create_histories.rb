class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.integer :amount
      t.integer :borrower_id
      t.integer :lender_id

      t.timestamps
    end
  end
end
