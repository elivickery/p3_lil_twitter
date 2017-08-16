class CreateTweetTags < ActiveRecord::Migration[4.2]
  def change
    create_table :tweet_tags do |column|
      column.belongs_to :tweet
      column.belongs_to :hashtag
    end
  end
end
