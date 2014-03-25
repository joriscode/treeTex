/** @constructor */
ScalaJS.c.scala_util_Either = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Either.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either.prototype.constructor = ScalaJS.c.scala_util_Either;
ScalaJS.c.scala_util_Either.prototype.left__Lscala_util_Either$LeftProjection = (function() {
  return new ScalaJS.c.scala_util_Either$LeftProjection().init___Lscala_util_Either(this)
});
ScalaJS.c.scala_util_Either.prototype.right__Lscala_util_Either$RightProjection = (function() {
  return new ScalaJS.c.scala_util_Either$RightProjection().init___Lscala_util_Either(this)
});
ScalaJS.c.scala_util_Either.prototype.fold__Lscala_Function1__Lscala_Function1__O = (function(fa, fb) {
  var x1 = this;
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return fa.apply__O__O(a)
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return fb.apply__O__O(b)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either.prototype.swap__Lscala_util_Either = (function() {
  var x1 = this;
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return new ScalaJS.c.scala_util_Right().init___O(a)
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return new ScalaJS.c.scala_util_Left().init___O(b)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either.prototype.joinRight__Lscala_Predef$$less$colon$less__Lscala_util_Either = (function(ev) {
  var x1 = this;
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return new ScalaJS.c.scala_util_Left().init___O(a)
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return ScalaJS.as.scala_util_Either(ev.apply__O__O(b))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either.prototype.joinLeft__Lscala_Predef$$less$colon$less__Lscala_util_Either = (function(ev) {
  var x1 = this;
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return ScalaJS.as.scala_util_Either(ev.apply__O__O(a))
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var b = x3.b__O();
    return new ScalaJS.c.scala_util_Right().init___O(b)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either.prototype.joinLeft__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.joinLeft__Lscala_Predef$$less$colon$less__Lscala_util_Either(ev)
});
ScalaJS.c.scala_util_Either.prototype.joinRight__Lscala_Predef$$less$colon$less__ = (function(ev$2) {
  return this.joinRight__Lscala_Predef$$less$colon$less__Lscala_util_Either(ev$2)
});
ScalaJS.c.scala_util_Either.prototype.swap__ = (function() {
  return this.swap__Lscala_util_Either()
});
ScalaJS.c.scala_util_Either.prototype.fold__Lscala_Function1__Lscala_Function1__ = (function(fa, fb) {
  return this.fold__Lscala_Function1__Lscala_Function1__O(fa, fb)
});
ScalaJS.c.scala_util_Either.prototype.right__ = (function() {
  return this.right__Lscala_util_Either$RightProjection()
});
ScalaJS.c.scala_util_Either.prototype.left__ = (function() {
  return this.left__Lscala_util_Either$LeftProjection()
});
ScalaJS.c.scala_util_Either.prototype.isRight__ = (function() {
  return ScalaJS.bZ(this.isRight__Z())
});
ScalaJS.c.scala_util_Either.prototype.isLeft__ = (function() {
  return ScalaJS.bZ(this.isLeft__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either.prototype = ScalaJS.c.scala_util_Either.prototype;
ScalaJS.is.scala_util_Either = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either)))
});
ScalaJS.as.scala_util_Either = (function(obj) {
  if ((ScalaJS.is.scala_util_Either(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either")
  }
});
ScalaJS.isArrayOf.scala_util_Either = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either)))
});
ScalaJS.asArrayOf.scala_util_Either = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either;", depth)
  }
});
ScalaJS.data.scala_util_Either = new ScalaJS.ClassTypeData({
  scala_util_Either: 0
}, false, "scala.util.Either", ScalaJS.data.java_lang_Object, {
  scala_util_Either: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either.prototype.$classData = ScalaJS.data.scala_util_Either;
//@ sourceMappingURL=Either.js.map
