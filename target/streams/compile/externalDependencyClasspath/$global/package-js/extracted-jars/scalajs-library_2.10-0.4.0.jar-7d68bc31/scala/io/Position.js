/** @constructor */
ScalaJS.c.scala_io_Position = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.LINE$undBITS$1 = 0;
  this.COLUMN$undBITS$1 = 0;
  this.LINE$undMASK$1 = 0;
  this.COLUMN$undMASK$1 = 0
});
ScalaJS.c.scala_io_Position.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Position.prototype.constructor = ScalaJS.c.scala_io_Position;
ScalaJS.c.scala_io_Position.prototype.LINE$undBITS__I = (function() {
  return 20
});
ScalaJS.c.scala_io_Position.prototype.COLUMN$undBITS__I = (function() {
  return 11
});
ScalaJS.c.scala_io_Position.prototype.LINE$undMASK__I = (function() {
  return 1048575
});
ScalaJS.c.scala_io_Position.prototype.COLUMN$undMASK__I = (function() {
  return 2047
});
ScalaJS.c.scala_io_Position.prototype.encode__I__I__I = (function(line, column) {
  this.checkInput__I__I__V(line, column);
  if ((line >= 1048575)) {
    return 2147481600
  } else {
    return ((line << 11) | ScalaJS.modules.scala_math_package().min__I__I__I(2047, column))
  }
});
ScalaJS.c.scala_io_Position.prototype.line__I__I = (function(pos) {
  return ((pos >> 11) & 1048575)
});
ScalaJS.c.scala_io_Position.prototype.column__I__I = (function(pos) {
  return (pos & 2047)
});
ScalaJS.c.scala_io_Position.prototype.toString__I__T = (function(pos) {
  return (("" + (ScalaJS.bI(this.line__I__I(pos)) + ":")) + ScalaJS.bI(this.column__I__I(pos)))
});
ScalaJS.c.scala_io_Position.prototype.toString__I__ = (function(pos) {
  return this.toString__I__T(pos)
});
ScalaJS.c.scala_io_Position.prototype.column__I__ = (function(pos$2) {
  return ScalaJS.bI(this.column__I__I(pos$2))
});
ScalaJS.c.scala_io_Position.prototype.line__I__ = (function(pos$3) {
  return ScalaJS.bI(this.line__I__I(pos$3))
});
ScalaJS.c.scala_io_Position.prototype.encode__I__I__ = (function(line, column) {
  return ScalaJS.bI(this.encode__I__I__I(line, column))
});
ScalaJS.c.scala_io_Position.prototype.COLUMN$undMASK__ = (function() {
  return ScalaJS.bI(this.COLUMN$undMASK__I())
});
ScalaJS.c.scala_io_Position.prototype.LINE$undMASK__ = (function() {
  return ScalaJS.bI(this.LINE$undMASK__I())
});
ScalaJS.c.scala_io_Position.prototype.COLUMN$undBITS__ = (function() {
  return ScalaJS.bI(this.COLUMN$undBITS__I())
});
ScalaJS.c.scala_io_Position.prototype.LINE$undBITS__ = (function() {
  return ScalaJS.bI(this.LINE$undBITS__I())
});
ScalaJS.c.scala_io_Position.prototype.checkInput__I__I__ = (function(line$2, column$2) {
  return ScalaJS.bV(this.checkInput__I__I__V(line$2, column$2))
});
/** @constructor */
ScalaJS.inheritable.scala_io_Position = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Position.prototype = ScalaJS.c.scala_io_Position.prototype;
ScalaJS.is.scala_io_Position = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Position)))
});
ScalaJS.as.scala_io_Position = (function(obj) {
  if ((ScalaJS.is.scala_io_Position(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Position")
  }
});
ScalaJS.isArrayOf.scala_io_Position = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Position)))
});
ScalaJS.asArrayOf.scala_io_Position = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Position(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Position;", depth)
  }
});
ScalaJS.data.scala_io_Position = new ScalaJS.ClassTypeData({
  scala_io_Position: 0
}, false, "scala.io.Position", ScalaJS.data.java_lang_Object, {
  scala_io_Position: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Position.prototype.$classData = ScalaJS.data.scala_io_Position;
//@ sourceMappingURL=Position.js.map
