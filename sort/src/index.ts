import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const nums = new NumbersCollection([100, 3, -5, 0, -2, 12])
const chars = new CharactersCollection('sidjadakASDFasfSxbxBn')
const ll = new LinkedList()

ll.add(12)
ll.add(5)
ll.add(23)
ll.add(141)
ll.add(-6)
ll.add(32)
ll.add(-3)

nums.sort()
chars.sort()
ll.sort()
ll.print()
console.log(nums.data)
console.log(chars.data)
