class BlocksController < ApplicationController
  before_action :set_block, only: [:show, :update, :destroy]

  # GET /blocks
  # GET /blocks.json
  def index
    @blocks = Block.all

    render json: @blocks
  end

  # GET /blocks/1
  # GET /blocks/1.json
  def show
    render json: @block
  end

  # POST /blocks
  # POST /blocks.json
  def create
    @block = Block.new(block_params)

    if @block.save
      render json: @block, status: :created, location: @block
    else
      render json: @block.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blocks/1
  # PATCH/PUT /blocks/1.json
  def update
    if @block.update(block_params)
      head :no_content
    else
      render json: @block.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blocks/1
  # DELETE /blocks/1.json
  def destroy
    @block.destroy

    head :no_content
  end

  private

    def set_block
      @block = Block.find(params[:id])
    end

    def block_params
      params.require(:block).permit(:number, :timestamp, :transactions, :hash, :parentHash, :miner, :difficulty, :totalDifficulty, :size, :gasUsed, :gasLimit, :nonce, :blockReward, :uncleReward, :extraData)
    end
end
