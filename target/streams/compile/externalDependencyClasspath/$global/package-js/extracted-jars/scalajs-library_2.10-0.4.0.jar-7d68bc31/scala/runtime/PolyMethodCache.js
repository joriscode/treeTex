/** @constructor */
ScalaJS.c.scala_runtime_PolyMethodCache = (function() {
  ScalaJS.c.scala_runtime_MethodCache.call(this);
  this.next$2 = null;
  this.receiver$2 = null;
  this.method$2 = null;
  this.complexity$2 = 0;
  this.MaxComplexity$2 = 0
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype = new ScalaJS.inheritable.scala_runtime_MethodCache();
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.constructor = ScalaJS.c.scala_runtime_PolyMethodCache;
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.findInternal__p2__Ljava_lang_Class__Ljava_lang_reflect_Method = (function(forReceiver) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((forReceiver === _$this.receiver$2)) {
      return _$this.method$2
    } else {
      var x1 = _$this.next$2;
      if (ScalaJS.is.scala_runtime_PolyMethodCache(x1)) {
        var x2 = ScalaJS.as.scala_runtime_PolyMethodCache(x1);
        _$this = x2;
        continue tailCallLoop
      };
      return _$this.next$2.find__Ljava_lang_Class__Ljava_lang_reflect_Method(forReceiver)
    }
  }
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.find__Ljava_lang_Class__Ljava_lang_reflect_Method = (function(forReceiver) {
  return this.findInternal__p2__Ljava_lang_Class__Ljava_lang_reflect_Method(forReceiver)
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.MaxComplexity__p2__I = (function() {
  return 160
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.add__Ljava_lang_Class__Ljava_lang_reflect_Method__Lscala_runtime_MethodCache = (function(forReceiver, forMethod) {
  if ((this.complexity$2 < 160)) {
    return new ScalaJS.c.scala_runtime_PolyMethodCache().init___Lscala_runtime_MethodCache__Ljava_lang_Class__Ljava_lang_reflect_Method__I(this, forReceiver, forMethod, (this.complexity$2 + 1))
  } else {
    return new ScalaJS.c.scala_runtime_MegaMethodCache().init___T__ALjava_lang_Class(forMethod.getName__T(), forMethod.getParameterTypes__ALjava_lang_Class())
  }
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.init___Lscala_runtime_MethodCache__Ljava_lang_Class__Ljava_lang_reflect_Method__I = (function(next, receiver, method, complexity) {
  this.next$2 = next;
  this.receiver$2 = receiver;
  this.method$2 = method;
  this.complexity$2 = complexity;
  ScalaJS.c.scala_runtime_MethodCache.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_PolyMethodCache = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_PolyMethodCache.prototype = ScalaJS.c.scala_runtime_PolyMethodCache.prototype;
ScalaJS.is.scala_runtime_PolyMethodCache = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_PolyMethodCache)))
});
ScalaJS.as.scala_runtime_PolyMethodCache = (function(obj) {
  if ((ScalaJS.is.scala_runtime_PolyMethodCache(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.PolyMethodCache")
  }
});
ScalaJS.isArrayOf.scala_runtime_PolyMethodCache = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_PolyMethodCache)))
});
ScalaJS.asArrayOf.scala_runtime_PolyMethodCache = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_PolyMethodCache(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.PolyMethodCache;", depth)
  }
});
ScalaJS.data.scala_runtime_PolyMethodCache = new ScalaJS.ClassTypeData({
  scala_runtime_PolyMethodCache: 0
}, false, "scala.runtime.PolyMethodCache", ScalaJS.data.scala_runtime_MethodCache, {
  scala_runtime_PolyMethodCache: 1,
  scala_runtime_MethodCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_PolyMethodCache.prototype.$classData = ScalaJS.data.scala_runtime_PolyMethodCache;
//@ sourceMappingURL=PolyMethodCache.js.map
