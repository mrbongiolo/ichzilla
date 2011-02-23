require "rubygems"

require 'bundler'
Bundler.require

require "sinatra"
require "erb"

helpers do
  def select_tag(name, collection, *args)
    options = args.last.is_a?(Hash) ? args.last : { }
    options_for_select = ""
    options_for_select += " class=\"#{options[:class]}\"" if options[:class]
    options_for_select += " size=\"#{options[:size]}\"" if options[:size]
    result = "<select id=\"#{name.to_s.downcase}\" name=\"#{name.to_s}\" #{options_for_select} >\n"
    collection.each do |c|
      result += "<option value=\"#{c.to_s.downcase}\">#{c.to_s.capitalize}</option>\n"
    end
    result += "</select>\n"
  end
end

get '/' do 
  @classes = %w(warrior defender priest cleric
                enchanter sorcerer archer assassin
                life shadow rune
                templar attacker gunner)
  erb :ichzilla
end
