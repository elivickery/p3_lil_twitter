# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

50.times do
  Hashtag.create( name: Faker::Lorem.word )
end

hashtag_count = Hashtag.count

500.times do
  internet_name = Faker::Internet.user_name
  tweet = Tweet.create( content: Faker::Lorem.sentence,
                        username: Faker::Name.name,
                        handle: "@#{internet_name}",
                        avatar_url: Faker::Avatar.image(internet_name) )
  rand(1..4).times do
    tweet.hashtags << Hashtag.where(id: rand(1..hashtag_count) )
  end
end