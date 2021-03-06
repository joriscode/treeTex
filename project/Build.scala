import sbt._
import Keys._
import scala.scalajs.sbtplugin.ScalaJSPlugin._
import ScalaJSKeys._

object Build extends sbt.Build {

	resolvers ++= Seq(
	  "Sonatype OSS Releases"  at "http://oss.sonatype.org/content/repositories/releases/"
	)

  lazy val root = project.in(file(".")).settings(
    scalaJSSettings: _*
  ).settings(
    name := "games",
    libraryDependencies += "org.scala-lang.modules.scalajs" %% "scalajs-dom" % "0.3",
	libraryDependencies += "org.scalatest" % "scalatest_2.10" % "2.0" % "test"
  )
}
