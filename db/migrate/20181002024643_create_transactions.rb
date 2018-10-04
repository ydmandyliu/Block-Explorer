class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :number
      t.string :hash
      t.string :fromAddress
      t.string :toAddress
      t.integer :amount
      t.string :timestamp

      t.timestamps null: false
    end
  end
end
