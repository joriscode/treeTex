/** @constructor */
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.call(this);
  this.$$outer$3 = null;
  this.prevBlockContext$1$3 = null
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0$mcV$sp();
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1;
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.apply__V = (function() {
  this.apply$mcV$sp__V()
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.apply$mcV$sp__V = (function() {
  try {
    this.$$outer$3.scala$concurrent$Future$InternalCallbackExecutor$Batch$$parentBlockContext$f = this.prevBlockContext$1$3;
    this.processBatch$1__p3__Lscala_collection_immutable_List__V(this.$$outer$3.initial__Lscala_collection_immutable_List())
  } finally {
    ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().remove__V();
    this.$$outer$3.scala$concurrent$Future$InternalCallbackExecutor$Batch$$parentBlockContext$f = null
  }
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.apply__O = (function() {
  this.apply__V();
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.processBatch$1__p3__Lscala_collection_immutable_List__V = (function(batch) {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = batch;
    matchEnd5: {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
        var x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
        var head = ScalaJS.as.java_lang_Runnable(x2.hd$1__O());
        var tail = x2.tl$1__Lscala_collection_immutable_List();
        ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().set__O__V(tail);
        try {
          head.run__V()
        } catch ($jsexc$) {
          $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
          var t = $jsexc$;
          var remaining = ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().get__O());
          ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().set__O__V(ScalaJS.modules.scala_collection_immutable_Nil());
          ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$unbatchedExecute__Ljava_lang_Runnable__V(new ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch().init___Lscala_collection_immutable_List(remaining));
          throw ScalaJS.unwrapJavaScriptException(t)
        };
        batch = ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor().scala$concurrent$Future$InternalCallbackExecutor$$$undtasksLocal__Ljava_lang_ThreadLocal().get__O());
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.init___Lscala_concurrent_Future$InternalCallbackExecutor$Batch__Lscala_concurrent_BlockContext = (function($$outer, prevBlockContext$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  this.prevBlockContext$1$3 = prevBlockContext$1;
  ScalaJS.c.scala_runtime_AbstractFunction0$mcV$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype = ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype;
ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1)))
});
ScalaJS.as.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$InternalCallbackExecutor$Batch$$anonfun$run$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$InternalCallbackExecutor$Batch$$anonfun$run$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1: 0
}, false, "scala.concurrent.Future$InternalCallbackExecutor$Batch$$anonfun$run$1", ScalaJS.data.scala_runtime_AbstractFunction0$mcV$sp, {
  scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0$mcV$sp: 1,
  scala_Function0$mcV$sp: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$InternalCallbackExecutor$Batch$$anonfun$run$1;
//@ sourceMappingURL=Future$InternalCallbackExecutor$Batch$$anonfun$run$1.js.map
