/** @constructor */
ScalaJS.c.scala_concurrent_BlockContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.contextLocal$1 = null
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_BlockContext$.prototype.constructor = ScalaJS.c.scala_concurrent_BlockContext$;
ScalaJS.c.scala_concurrent_BlockContext$.prototype.contextLocal__p1__Ljava_lang_ThreadLocal = (function() {
  return this.contextLocal$1
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.current__Lscala_concurrent_BlockContext = (function() {
  var x1 = ScalaJS.as.scala_concurrent_BlockContext(this.contextLocal__p1__Ljava_lang_ThreadLocal().get__O());
  if (ScalaJS.anyRefEqEq(null, x1)) {
    var x1$2 = ScalaJS.modules.java_lang_Thread().currentThread__Ljava_lang_Thread();
    if (ScalaJS.is.scala_concurrent_BlockContext(x1$2)) {
      var x2 = x1$2;
      return ScalaJS.as.scala_concurrent_BlockContext(x2)
    };
    return ScalaJS.modules.scala_concurrent_BlockContext$DefaultBlockContext()
  };
  return x1
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.withBlockContext__Lscala_concurrent_BlockContext__Lscala_Function0__O = (function(blockContext, body) {
  var old = ScalaJS.as.scala_concurrent_BlockContext(this.contextLocal__p1__Ljava_lang_ThreadLocal().get__O());
  try {
    this.contextLocal__p1__Ljava_lang_ThreadLocal().set__O__V(blockContext);
    return body.apply__O()
  } finally {
    this.contextLocal__p1__Ljava_lang_ThreadLocal().set__O__V(old)
  }
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_BlockContext = this;
  this.contextLocal$1 = new ScalaJS.c.java_lang_ThreadLocal().init___();
  return this
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.withBlockContext__Lscala_concurrent_BlockContext__Lscala_Function0__ = (function(blockContext, body) {
  return this.withBlockContext__Lscala_concurrent_BlockContext__Lscala_Function0__O(blockContext, body)
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.current__ = (function() {
  return this.current__Lscala_concurrent_BlockContext()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_BlockContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_BlockContext$.prototype = ScalaJS.c.scala_concurrent_BlockContext$.prototype;
ScalaJS.is.scala_concurrent_BlockContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_BlockContext$)))
});
ScalaJS.as.scala_concurrent_BlockContext$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_BlockContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.BlockContext")
  }
});
ScalaJS.isArrayOf.scala_concurrent_BlockContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_BlockContext$)))
});
ScalaJS.asArrayOf.scala_concurrent_BlockContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_BlockContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.BlockContext;", depth)
  }
});
ScalaJS.data.scala_concurrent_BlockContext$ = new ScalaJS.ClassTypeData({
  scala_concurrent_BlockContext$: 0
}, false, "scala.concurrent.BlockContext$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_BlockContext$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_BlockContext$.prototype.$classData = ScalaJS.data.scala_concurrent_BlockContext$;
ScalaJS.moduleInstances.scala_concurrent_BlockContext = undefined;
ScalaJS.modules.scala_concurrent_BlockContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_BlockContext)) {
    ScalaJS.moduleInstances.scala_concurrent_BlockContext = new ScalaJS.c.scala_concurrent_BlockContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_BlockContext
});
//@ sourceMappingURL=BlockContext$.js.map
