json.extract! block, :id, :number, :timestamp, :transactions, :hash, :parentHash, :miner, :difficulty, :totalDifficulty, :size, :gasUsed, :gasLimit, :nonce, :blockReward, :uncleReward, :extraData, :created_at, :updated_at
json.url block_url(block, format: :json)
