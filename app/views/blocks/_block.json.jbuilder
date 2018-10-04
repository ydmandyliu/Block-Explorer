json.extract! block, :id, :number, :hash, :difficulty, :address, :size, :timestamp, :transactions, :gas, :created_at, :updated_at
json.url block_url(block, format: :json)
