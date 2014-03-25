/** @constructor */
ScalaJS.c.scala_language$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.dynamics$1 = null;
  this.postfixOps$1 = null;
  this.reflectiveCalls$1 = null;
  this.implicitConversions$1 = null;
  this.higherKinds$1 = null;
  this.existentials$1 = null;
  this.bitmap$0$1 = 0
});
ScalaJS.c.scala_language$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_language$.prototype.constructor = ScalaJS.c.scala_language$;
ScalaJS.c.scala_language$.prototype.dynamics$lzycompute__p1__Lscala_languageFeature$dynamics = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.dynamics$1 = ScalaJS.modules.scala_languageFeature$dynamics();
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.dynamics$1
});
ScalaJS.c.scala_language$.prototype.postfixOps$lzycompute__p1__Lscala_languageFeature$postfixOps = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.postfixOps$1 = ScalaJS.modules.scala_languageFeature$postfixOps();
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.postfixOps$1
});
ScalaJS.c.scala_language$.prototype.reflectiveCalls$lzycompute__p1__Lscala_languageFeature$reflectiveCalls = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    this.reflectiveCalls$1 = ScalaJS.modules.scala_languageFeature$reflectiveCalls();
    this.bitmap$0$1 = (this.bitmap$0$1 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.reflectiveCalls$1
});
ScalaJS.c.scala_language$.prototype.implicitConversions$lzycompute__p1__Lscala_languageFeature$implicitConversions = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    this.implicitConversions$1 = ScalaJS.modules.scala_languageFeature$implicitConversions();
    this.bitmap$0$1 = (this.bitmap$0$1 | 8)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.implicitConversions$1
});
ScalaJS.c.scala_language$.prototype.higherKinds$lzycompute__p1__Lscala_languageFeature$higherKinds = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    this.higherKinds$1 = ScalaJS.modules.scala_languageFeature$higherKinds();
    this.bitmap$0$1 = (this.bitmap$0$1 | 16)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.higherKinds$1
});
ScalaJS.c.scala_language$.prototype.existentials$lzycompute__p1__Lscala_languageFeature$existentials = (function() {
  if (((this.bitmap$0$1 & 32) === 0)) {
    this.existentials$1 = ScalaJS.modules.scala_languageFeature$existentials();
    this.bitmap$0$1 = (this.bitmap$0$1 | 32)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.existentials$1
});
ScalaJS.c.scala_language$.prototype.dynamics__Lscala_languageFeature$dynamics = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.dynamics$lzycompute__p1__Lscala_languageFeature$dynamics()
  } else {
    return this.dynamics$1
  }
});
ScalaJS.c.scala_language$.prototype.postfixOps__Lscala_languageFeature$postfixOps = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.postfixOps$lzycompute__p1__Lscala_languageFeature$postfixOps()
  } else {
    return this.postfixOps$1
  }
});
ScalaJS.c.scala_language$.prototype.reflectiveCalls__Lscala_languageFeature$reflectiveCalls = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    return this.reflectiveCalls$lzycompute__p1__Lscala_languageFeature$reflectiveCalls()
  } else {
    return this.reflectiveCalls$1
  }
});
ScalaJS.c.scala_language$.prototype.implicitConversions__Lscala_languageFeature$implicitConversions = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    return this.implicitConversions$lzycompute__p1__Lscala_languageFeature$implicitConversions()
  } else {
    return this.implicitConversions$1
  }
});
ScalaJS.c.scala_language$.prototype.higherKinds__Lscala_languageFeature$higherKinds = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    return this.higherKinds$lzycompute__p1__Lscala_languageFeature$higherKinds()
  } else {
    return this.higherKinds$1
  }
});
ScalaJS.c.scala_language$.prototype.existentials__Lscala_languageFeature$existentials = (function() {
  if (((this.bitmap$0$1 & 32) === 0)) {
    return this.existentials$lzycompute__p1__Lscala_languageFeature$existentials()
  } else {
    return this.existentials$1
  }
});
ScalaJS.c.scala_language$.prototype.existentials__ = (function() {
  return this.existentials__Lscala_languageFeature$existentials()
});
ScalaJS.c.scala_language$.prototype.higherKinds__ = (function() {
  return this.higherKinds__Lscala_languageFeature$higherKinds()
});
ScalaJS.c.scala_language$.prototype.implicitConversions__ = (function() {
  return this.implicitConversions__Lscala_languageFeature$implicitConversions()
});
ScalaJS.c.scala_language$.prototype.reflectiveCalls__ = (function() {
  return this.reflectiveCalls__Lscala_languageFeature$reflectiveCalls()
});
ScalaJS.c.scala_language$.prototype.postfixOps__ = (function() {
  return this.postfixOps__Lscala_languageFeature$postfixOps()
});
ScalaJS.c.scala_language$.prototype.dynamics__ = (function() {
  return this.dynamics__Lscala_languageFeature$dynamics()
});
/** @constructor */
ScalaJS.inheritable.scala_language$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_language$.prototype = ScalaJS.c.scala_language$.prototype;
ScalaJS.is.scala_language$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_language$)))
});
ScalaJS.as.scala_language$ = (function(obj) {
  if ((ScalaJS.is.scala_language$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.language")
  }
});
ScalaJS.isArrayOf.scala_language$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_language$)))
});
ScalaJS.asArrayOf.scala_language$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_language$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.language;", depth)
  }
});
ScalaJS.data.scala_language$ = new ScalaJS.ClassTypeData({
  scala_language$: 0
}, false, "scala.language$", ScalaJS.data.java_lang_Object, {
  scala_language$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_language$.prototype.$classData = ScalaJS.data.scala_language$;
ScalaJS.moduleInstances.scala_language = undefined;
ScalaJS.modules.scala_language = (function() {
  if ((!ScalaJS.moduleInstances.scala_language)) {
    ScalaJS.moduleInstances.scala_language = new ScalaJS.c.scala_language$().init___()
  };
  return ScalaJS.moduleInstances.scala_language
});
//@ sourceMappingURL=language$.js.map
