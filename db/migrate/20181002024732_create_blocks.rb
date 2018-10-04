class CreateBlocks < ActiveRecord::Migration
  def change
    create_table :blocks do |t|
      t.integer :number
      t.string :hash
      t.integer :difficulty
      t.string :address
      t.integer :size
      t.string :timestamp
      t.integer :transactions
      t.integer :gas

      t.timestamps null: false
    end
  end
end
