var friendName=['Ali','Naveed','Kashif','Waleed']
friendName.unshift('Muzamil')
friendName.splice(2,0,'Abdullah')
friendName.push('Ahmad')
console.log(friendName)

var message='You have only 2 friends ro invite'

var notInvitedFriend1=friendName.pop()
console.log(notInvitedFriend1,'you’re sorry you can’t invite them to dinner')

var notInvitedFriend2=friendName.pop()
console.log(notInvitedFriend2,'you’re sorry you can’t invite them to dinner')

var notInvitedFriend3=friendName.pop()
console.log(notInvitedFriend3,'you’re sorry you can’t invite them to dinner')

var notInvitedFriend4=friendName.pop()
console.log(notInvitedFriend4,'you’re sorry you can’t invite them to dinner')

var notInvitedFriend5=friendName.pop()
console.log(notInvitedFriend5,'you’re sorry you can’t invite them to dinner')

console.log(friendName)

console.log(friendName[0],'Yor are not invinted in dinner')
console.log(friendName[1],'Yor are not invinted in dinner')

friendName.pop()
friendName.pop()

console.log(friendName)

