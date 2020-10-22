import { Command } from '@types'

import { tags } from './tagsList'

const tagsCommand: Command = {
  regex: /^(tags)$/,
  usage: 'tags',
  description: 'List all available tags.',

  async callback ({ message, embed }): Promise<void> {
    await message.channel.send(embed({
      title: 'Tags',
      description: Object.entries(tags)
        .map(([key, props]) => {
          return props['title']
            ? `\`${key}\` - ${props['title']}`
            : `\`${key}\``
        })
        .join('\n'),
    }))
  },
}

export default tagsCommand
