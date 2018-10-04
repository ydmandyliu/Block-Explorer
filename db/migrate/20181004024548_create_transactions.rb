class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :blockNumber
      t.string :timestamp
      t.string :hash
      t.string :from
      t.string :to
      t.integer :value
      t.integer :fee
      t.integer :gasLimit
      t.integer :gasUsed
      t.integer :gasPrice
      t.string :nonce
      t.string :input

      t.timestamps null: false
    end
  end
end
