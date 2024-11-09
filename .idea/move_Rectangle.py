#!/usr/bin/env python3

import rospy
from geometry_msgs.msg import Twist

def move_rectangle():
    # Initialize the ROS node
    rospy.init_node('move_rectangle', anonymous=True)

    # Create a publisher to send velocity commands
    pub = rospy.Publisher('/turtle1/cmd_vel', Twist, queue_size=10)

    # Set the rate to 1 Hz
    rate = rospy.Rate(1)

    # Create Twist message for moving the turtle
    move_cmd = Twist()

    # Set linear speed (forward movement)
    move_cmd.linear.x = 2.0

    # Set angular speed (turning movement)
    move_cmd.angular.z = 0.0

    while not rospy.is_shutdown():
        # First, move forward (length)
        pub.publish(move_cmd)  # Move forward
        rospy.sleep(3)  # Move forward for 3 seconds (adjust as per length)

        # Turn right 90 degrees (1st corner)
        move_cmd.linear.x = 0.0
        move_cmd.angular.z = 1.57  # 90 degrees in radians
        pub.publish(move_cmd)
        rospy.sleep(1)  # Turn for 1 second

        # Move forward (breadth)
        move_cmd.linear.x = 2.0  # Set forward speed again
        move_cmd.angular.z = 0.0  # Keep angular speed as 0 for moving straight
        pub.publish(move_cmd)
        rospy.sleep(2)  # Move forward for 2 seconds (adjust as per breadth)

        # Turn right 90 degrees (2nd corner)
        move_cmd.linear.x = 0.0
        move_cmd.angular.z = 1.57  # 90 degrees in radians
        pub.publish(move_cmd)
        rospy.sleep(1)  # Turn for 1 second

        # Repeat for the other 2 sides (length and breadth)
        # Third side (move forward)
        move_cmd.linear.x = 2.0
        move_cmd.angular.z = 0.0
        pub.publish(move_cmd)
        rospy.sleep(3)

        # Turn right 90 degrees (3rd corner)
        move_cmd.linear.x = 0.0
        move_cmd.angular.z = 1.57
        pub.publish(move_cmd)
        rospy.sleep(1)

        # Fourth side (move forward)
        move_cmd.linear.x = 2.0
        move_cmd.angular.z = 0.0
        pub.publish(move_cmd)
        rospy.sleep(2)

        # End the loop after completing one rectangle path
        break

if __name__ == '__main__':
    try:
        move_rectangle()
    except rospy.ROSInterruptException:
        pass
