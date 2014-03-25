/** @constructor */
ScalaJS.c.scala_sys_process_BasicIO$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.BufferSize$1 = 0;
  this.Newline$1 = null
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_BasicIO$.prototype.constructor = ScalaJS.c.scala_sys_process_BasicIO$;
ScalaJS.c.scala_sys_process_BasicIO$.prototype.BufferSize__I = (function() {
  return 8192
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.Newline__T = (function() {
  return this.Newline$1
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Lscala_Function1__Lscala_Option__Lscala_sys_process_ProcessIO = (function(withIn, output, log) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1(this.input__Z__Lscala_Function1(withIn), this.processFully__Lscala_Function1__Lscala_Function1(output), this.getErr__Lscala_Option__Lscala_Function1(log))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Ljava_lang_StringBuffer__Lscala_Option__Lscala_sys_process_ProcessIO = (function(withIn, buffer, log) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1(this.input__Z__Lscala_Function1(withIn), this.processFully__Ljava_lang_Appendable__Lscala_Function1(buffer), this.getErr__Lscala_Option__Lscala_Function1(log))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Lscala_sys_process_ProcessLogger__Lscala_sys_process_ProcessIO = (function(withIn, log) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1(this.input__Z__Lscala_Function1(withIn), this.processOutFully__p1__Lscala_sys_process_ProcessLogger__Lscala_Function1(log), this.processErrFully__p1__Lscala_sys_process_ProcessLogger__Lscala_Function1(log))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.getErr__Lscala_Option__Lscala_Function1 = (function(log) {
  var x1 = log;
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var lg = ScalaJS.as.scala_sys_process_ProcessLogger(x2.x__O());
    return this.processErrFully__p1__Lscala_sys_process_ProcessLogger__Lscala_Function1(lg)
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return this.toStdErr__Lscala_Function1()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processErrFully__p1__Lscala_sys_process_ProcessLogger__Lscala_Function1 = (function(log) {
  return this.processFully__Lscala_Function1__Lscala_Function1(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(log$1) {
    return (function(x$1) {
      log$1.err__Lscala_Function0__V(new ScalaJS.c.scala_sys_process_BasicIO$$anonfun$processErrFully$1$$anonfun$apply$4().init___Lscala_sys_process_BasicIO$$anonfun$processErrFully$1__T(this, x$1));
      return ScalaJS.bV(undefined)
    })
  })(log)))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processOutFully__p1__Lscala_sys_process_ProcessLogger__Lscala_Function1 = (function(log) {
  return this.processFully__Lscala_Function1__Lscala_Function1(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(log$2) {
    return (function(x$2) {
      log$2.out__Lscala_Function0__V(new ScalaJS.c.scala_sys_process_BasicIO$$anonfun$processOutFully$1$$anonfun$apply$5().init___Lscala_sys_process_BasicIO$$anonfun$processOutFully$1__T(this, x$2));
      return ScalaJS.bV(undefined)
    })
  })(log)))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.close__Ljava_io_Closeable__V = (function(c) {
  try {
    c.close__V()
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      /*<skip>*/
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processFully__Ljava_lang_Appendable__Lscala_Function1 = (function(buffer) {
  return this.processFully__Lscala_Function1__Lscala_Function1(this.appendLine__p1__Ljava_lang_Appendable__Lscala_Function1(buffer))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processFully__Lscala_Function1__Lscala_Function1 = (function(processLine) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(processLine$1) {
    return (function(in$2) {
      var reader = new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader(new ScalaJS.c.java_io_InputStreamReader().init___Ljava_io_InputStream(in$2));
      ScalaJS.modules.scala_sys_process_BasicIO().processLinesFully__Lscala_Function1__Lscala_Function0__V(processLine$1, new ScalaJS.c.scala_sys_process_BasicIO$$anonfun$processFully$1$$anonfun$apply$6().init___Lscala_sys_process_BasicIO$$anonfun$processFully$1__Ljava_io_BufferedReader(this, reader));
      reader.close__V();
      return ScalaJS.bV(undefined)
    })
  })(processLine))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processLinesFully__Lscala_Function1__Lscala_Function0__V = (function(processLine, readLine) {
  this.readFully$1__p1__Lscala_Function1__Lscala_Function0__V(processLine, readLine)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.connectToIn__Ljava_io_OutputStream__V = (function(o) {
  this.transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V(ScalaJS.modules.scala_sys_process_BasicIO$Uncloseable().protect__Ljava_io_InputStream__Ljava_io_InputStream(ScalaJS.modules.scala_sys_process_package().stdin__Ljava_io_InputStream()), o)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.input__Z__Lscala_Function1 = (function(connect) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(connect$1) {
    return (function(outputToProcess) {
      if (connect$1) {
        ScalaJS.modules.scala_sys_process_BasicIO().connectToIn__Ljava_io_OutputStream__V(outputToProcess)
      };
      outputToProcess.close__V();
      return ScalaJS.bV(undefined)
    })
  })(connect))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.standard__Z__Lscala_sys_process_ProcessIO = (function(connectInput) {
  return this.standard__Lscala_Function1__Lscala_sys_process_ProcessIO(this.input__Z__Lscala_Function1(connectInput))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.standard__Lscala_Function1__Lscala_sys_process_ProcessIO = (function(in$2) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1(in$2, this.toStdOut__Lscala_Function1(), this.toStdErr__Lscala_Function1())
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.toStdErr__Lscala_Function1 = (function() {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(in$2) {
      ScalaJS.modules.scala_sys_process_BasicIO().transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V(in$2, ScalaJS.modules.scala_sys_process_package().stderr__Ljava_io_PrintStream());
      return ScalaJS.bV(undefined)
    })
  })())
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.toStdOut__Lscala_Function1 = (function() {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(in$2) {
      ScalaJS.modules.scala_sys_process_BasicIO().transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V(in$2, ScalaJS.modules.scala_sys_process_package().stdout__Ljava_io_PrintStream());
      return ScalaJS.bV(undefined)
    })
  })())
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V = (function(in$2, out) {
  try {
    this.transferFullyImpl__p1__Ljava_io_InputStream__Ljava_io_OutputStream__V(in$2, out)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var x1 = $jsexc$;
    var catchExpr1 = ScalaJS.modules.scala_sys_process_processInternal().onInterrupt__Lscala_Function0__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
      return (function() {
        return ScalaJS.bV(undefined)
      })
    })()));
    if (catchExpr1.isDefinedAt__O__Z(x1)) {
      catchExpr1.apply__O__O(x1)
    } else {
      throw ScalaJS.unwrapJavaScriptException(x1)
    }
  }
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.appendLine__p1__Ljava_lang_Appendable__Lscala_Function1 = (function(buffer) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(buffer$1) {
    return (function(line) {
      buffer$1.append__Ljava_lang_CharSequence__Ljava_lang_Appendable(line);
      buffer$1.append__Ljava_lang_CharSequence__Ljava_lang_Appendable(ScalaJS.modules.scala_sys_process_BasicIO().Newline__T());
      return ScalaJS.bV(undefined)
    })
  })(buffer))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.transferFullyImpl__p1__Ljava_io_InputStream__Ljava_io_OutputStream__V = (function(in$2, out) {
  var buffer = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [8192]);
  this.loop$1__p1__Ljava_io_InputStream__Ljava_io_OutputStream__AB__V(in$2, out, buffer);
  in$2.close__V()
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.readFully$1__p1__Lscala_Function1__Lscala_Function0__V = (function(processLine$2, readLine$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    var line = ScalaJS.as.java_lang_String(readLine$1.apply__O());
    if ((!ScalaJS.anyRefEqEq(line, null))) {
      processLine$2.apply__O__O(line);
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.loop$1__p1__Ljava_io_InputStream__Ljava_io_OutputStream__AB__V = (function(in$2, out$2, buffer$2) {
  var _$this = this;
  tailCallLoop: while (true) {
    var byteCount = in$2.read__AB__I(buffer$2);
    if ((byteCount > 0)) {
      out$2.write__AB__I__I__V(buffer$2, 0, byteCount);
      try {
        out$2.flush__V();
        var available = true
      } catch ($jsexc$) {
        if (ScalaJS.is.java_io_IOException($jsexc$)) {
          var available = false
        } else {
          throw $jsexc$
        }
      };
      if (available) {
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_sys_process_BasicIO = this;
  this.Newline$1 = ScalaJS.as.java_lang_String(ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties().apply__O__O("line.separator"));
  return this
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__ = (function(in$2, out) {
  return ScalaJS.bV(this.transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V(in$2, out))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.toStdOut__ = (function() {
  return this.toStdOut__Lscala_Function1()
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.toStdErr__ = (function() {
  return this.toStdErr__Lscala_Function1()
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.standard__Lscala_Function1__ = (function(in$3) {
  return this.standard__Lscala_Function1__Lscala_sys_process_ProcessIO(in$3)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.standard__Z__ = (function(connectInput) {
  return this.standard__Z__Lscala_sys_process_ProcessIO(connectInput)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.input__Z__ = (function(connect) {
  return this.input__Z__Lscala_Function1(connect)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.connectToIn__Ljava_io_OutputStream__ = (function(o) {
  return ScalaJS.bV(this.connectToIn__Ljava_io_OutputStream__V(o))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processLinesFully__Lscala_Function1__Lscala_Function0__ = (function(processLine, readLine) {
  return ScalaJS.bV(this.processLinesFully__Lscala_Function1__Lscala_Function0__V(processLine, readLine))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processFully__Lscala_Function1__ = (function(processLine$2) {
  return this.processFully__Lscala_Function1__Lscala_Function1(processLine$2)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.processFully__Ljava_lang_Appendable__ = (function(buffer) {
  return this.processFully__Ljava_lang_Appendable__Lscala_Function1(buffer)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.close__Ljava_io_Closeable__ = (function(c) {
  return ScalaJS.bV(this.close__Ljava_io_Closeable__V(c))
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.getErr__Lscala_Option__ = (function(log) {
  return this.getErr__Lscala_Option__Lscala_Function1(log)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Lscala_sys_process_ProcessLogger__ = (function(withIn, log$2) {
  return this.apply__Z__Lscala_sys_process_ProcessLogger__Lscala_sys_process_ProcessIO(withIn, log$2)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Ljava_lang_StringBuffer__Lscala_Option__ = (function(withIn$2, buffer$2, log$3) {
  return this.apply__Z__Ljava_lang_StringBuffer__Lscala_Option__Lscala_sys_process_ProcessIO(withIn$2, buffer$2, log$3)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.apply__Z__Lscala_Function1__Lscala_Option__ = (function(withIn$3, output, log$4) {
  return this.apply__Z__Lscala_Function1__Lscala_Option__Lscala_sys_process_ProcessIO(withIn$3, output, log$4)
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.Newline__ = (function() {
  return this.Newline__T()
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.BufferSize__ = (function() {
  return ScalaJS.bI(this.BufferSize__I())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_BasicIO$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_BasicIO$.prototype = ScalaJS.c.scala_sys_process_BasicIO$.prototype;
ScalaJS.is.scala_sys_process_BasicIO$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_BasicIO$)))
});
ScalaJS.as.scala_sys_process_BasicIO$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_BasicIO$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.BasicIO")
  }
});
ScalaJS.isArrayOf.scala_sys_process_BasicIO$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_BasicIO$)))
});
ScalaJS.asArrayOf.scala_sys_process_BasicIO$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_BasicIO$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.BasicIO;", depth)
  }
});
ScalaJS.data.scala_sys_process_BasicIO$ = new ScalaJS.ClassTypeData({
  scala_sys_process_BasicIO$: 0
}, false, "scala.sys.process.BasicIO$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_BasicIO$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_BasicIO$.prototype.$classData = ScalaJS.data.scala_sys_process_BasicIO$;
ScalaJS.moduleInstances.scala_sys_process_BasicIO = undefined;
ScalaJS.modules.scala_sys_process_BasicIO = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_process_BasicIO)) {
    ScalaJS.moduleInstances.scala_sys_process_BasicIO = new ScalaJS.c.scala_sys_process_BasicIO$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_process_BasicIO
});
//@ sourceMappingURL=BasicIO$.js.map
