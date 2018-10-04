json.extract! transaction, :id, :blockNumber, :timestamp, :hash, :from, :to, :value, :fee, :gasLimit, :gasUsed, :gasPrice, :nonce, :input, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
