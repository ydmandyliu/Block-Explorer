json.extract! transaction, :id, :number, :hash, :fromAddress, :toAddress, :amount, :timestamp, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
