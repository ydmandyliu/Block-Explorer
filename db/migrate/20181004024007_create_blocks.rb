class CreateBlocks < ActiveRecord::Migration
  def change
    create_table :blocks do |t|
      t.integer :number
      t.string :timestamp
      t.integer :transactions
      t.string :hash
      t.string :parentHash
      t.string :miner
      t.integer :difficulty
      t.integer :totalDifficulty
      t.integer :size
      t.integer :gasUsed
      t.integer :gasLimit
      t.string :nonce
      t.integer :blockReward
      t.integer :uncleReward
      t.string :extraData

      t.timestamps null: false
    end
  end
end
